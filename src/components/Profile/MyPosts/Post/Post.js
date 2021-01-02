import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img
				src="https://i.pinimg.com/originals/17/aa/71/17aa718c1ab15b482505b8431cf596fc.jpg"
				alt="sorry"
			/>
			{props.msg}
			<br/>
			{props.likesCount}
		</div>
	);
};

export default Post;
