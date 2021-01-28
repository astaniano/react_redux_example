import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png"

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
                props.setUsers(res.data.items);
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {
                props.users.map((u) => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="no img" className={s.userPhoto}/>
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
};

export default Users;
