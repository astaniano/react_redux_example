import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea name="" id="" cols="30" rows="3"></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				<Post name="jo"/>
				<Post name="ggg"/>
			</div>
		</div>
	);
};

export default MyPosts;
