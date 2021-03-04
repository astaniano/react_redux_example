import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateUserStatus} from "../../redux/profileReducer";
// import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} match={props.match} />

            <MyPostsContainer />
        </div>
    );
};

export default Profile;
