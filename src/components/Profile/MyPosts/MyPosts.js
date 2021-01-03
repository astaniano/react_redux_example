import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
	let posts = props.posts.map((post) => <Post msg={post.msg} likesCount={post.likesCount} />);

	let postTextRef = React.createRef();

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>

			<div>
				<div>
					<textarea ref={postTextRef}></textarea>
				</div>
				<div>
					<button onClick={props.addPost}>Add post</button>
				</div>
			</div>

			<div className={s.posts}>{posts}</div>
		</div>
	);
};

export default MyPosts;
