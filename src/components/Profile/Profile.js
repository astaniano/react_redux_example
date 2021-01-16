import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import s from './Profile.module.css';

const Profile = (props) => {
    let {posts, newPostText} = props.profilePage;

    return (
        <div>
            <ProfileInfo/>

            <MyPosts posts={posts} newPostText={newPostText} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;
