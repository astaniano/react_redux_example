import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
	let posts = [
		{ id: 1, msg: 'jo', likesCount: 12 },
		{ id: 2, msg: 'gg', likesCount: 11 },
	];

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>

			<div>
				<div>
					<textarea name="" id="" cols="30" rows="3"></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>

			<div className={s.posts}>
				{posts.map((post) => (
					<Post msg={post.msg} likesCount={post.likesCount} />
				))}
			</div>
		</div>
	);
};

export default MyPosts;
