import s from './Users.module.css';

const Users = (props) => {
    const nagiev = "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg";

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: nagiev,
                followed: true,
                name: 'Dmitrii',
                status: "real bro",
                location: {city: "minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: nagiev,
                followed: false,
                name: 'DIma',
                status: "bro",
                location: {city: "minsk", country: "Belarus"}
            },
            {
                id: 3,
                photoUrl: nagiev,
                followed: false,
                name: 'Sasha',
                status: "mini",
                location: {city: "minsk", country: "Belarus"}
            },
        ]);
    }

    return (
        <div>
            {
                props.users.map((u) => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} alt="no img" className={s.userPhoto}/>
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
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                               <div>{u.location.country}</div>
                               <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;
