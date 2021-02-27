import s from './Users.module.css';
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pageNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div>
                {pageNumbers.map((currentPageNumber) => <span
                    className={props.currentPage === currentPageNumber && s.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(currentPageNumber)
                    }}
                >{currentPageNumber} </span>)
                }
            </div>
            {
                props.users.map((u) => (
                    <div key={u.Id}>
                        <span>
                            <div>
                                <NavLink to={"profile/" + u.Id}>
                                    <img src={u.Photos.Small != null ? u.Photos.Small : userPhoto} alt="no img"
                                         className={s.userPhoto}/>
                                 </NavLink>
                            </div>
                            <div>
                                {u.Followed
                                    ? <button
                                        disabled={props.disabledFollowButtons.some((id) => u.Id === id)}
                                        onClick={() => {
                                        props.toggleDisableOfFollow(true, u.Id)
                                        axios.delete(`http://localhost:8081/api/1.0/users/follow/${u.Id}`)
                                            .then(res => {
                                                if (res.data.ResultCode === 0) {
                                                    props.unfollow(u.Id)
                                                }
                                                props.toggleDisableOfFollow(false, u.Id)
                                            })
                                    }}>unfollow</button>
                                    : <button
                                        disabled={props.disabledFollowButtons.some((id) => u.Id === id)}
                                        onClick={() => {
                                            props.toggleDisableOfFollow(true, u.Id)
                                            axios.post(`http://localhost:8081/api/1.0/users/follow/${u.Id}`, {})
                                                .then(res => {
                                                    if (res.data.ResultCode === 0) {
                                                        props.follow(u.Id)
                                                    }
                                                    props.toggleDisableOfFollow(false, u.Id)
                                                })
                                        }}>follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.Name}</div>
                                <div>{u.Status}</div>
                            </span>
                            <span>
                               <div>{"u.location.country"}</div>
                               <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    )
        ;
}

export default Users;
