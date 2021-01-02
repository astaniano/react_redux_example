import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />

			<MyPosts />
		</div>
	);
};

export default Profile;