import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    const posts = props.posts.map((post) => <Post msg={post.msg} likesCount={post.likesCount} key={post.id}/>);

    const postTextRef = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        const text = postTextRef.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} ref={postTextRef} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post
                    </button>
                </div>
            </div>

            <div className={s.posts}>{posts}</div>
        </div>
    );
};

export default MyPosts;
