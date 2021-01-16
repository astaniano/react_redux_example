import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let posts = props.posts.map((post) => <Post msg={post.msg} likesCount={post.likesCount}/>);

    let postTextRef = React.createRef();

    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let onChange = () => {
        let text = postTextRef.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: text});
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea onChange={onChange} ref={postTextRef} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>

            <div className={s.posts}>{posts}</div>
        </div>
    );
};

export default MyPosts;
