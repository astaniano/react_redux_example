import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = () => {
	let posts = [
		{ id: 1, msg: 'jo', likesCount: 12 },
		{ id: 2, msg: 'gg', likesCount: 11 },
	];

	return (
		<div>
			<ProfileInfo />

			<MyPosts posts={posts}/>
		</div>
	);
};

export default Profile;
