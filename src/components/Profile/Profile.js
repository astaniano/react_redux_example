import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import s from './Profile.module.css';

const Profile = (props) => {
	let { posts, addPost} = props.state;

	return (
		<div>
			<ProfileInfo />

			<MyPosts posts={posts} addPost={addPost} />
		</div>
	);
};

export default Profile;
