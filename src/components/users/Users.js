import s from './Users.module.css';
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    if (pagesCount > 10) {
        pagesCount = 10;
    }

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
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={"profile/" + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="no img"
                                         className={s.userPhoto}/>
                                 </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>unfollow</button> :
                                    <button onClick={() => {
                                        props.follow(u.id)
                                    }}>follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
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
    );
}

export default Users;
