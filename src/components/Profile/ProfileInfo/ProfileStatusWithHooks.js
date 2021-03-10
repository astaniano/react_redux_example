import React, {useState, useEffect} from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setState] = useState(false);
    const [userStatus, setUserStatus] = useState(props.status);

    useEffect(() => {
        setUserStatus(props.userStatus)
    }, [props.userStatus])

    const activateEditMode = () => {
        setState(true);
    }

    const deactivateEditMode = () => {
        setState(false);
        let userId = props.match.params.userId;
        props.updateUserStatus(userId, userStatus);
    }

    const onStatusChange = (e) => {
        setUserStatus(e.target.value);
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={onStatusChange} autoFocus={true}
                           onBlur={deactivateEditMode} value={userStatus}/>
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{props.userStatus || "-----"}</span>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;