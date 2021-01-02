import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
	let { posts } = props.state;

	return (
		<div>
			<ProfileInfo />

			<MyPosts posts={posts} />
		</div>
	);
};

export default Profile;
