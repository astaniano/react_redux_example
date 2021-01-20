import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let posts = props.posts.map((post) => <Post msg={post.msg} likesCount={post.likesCount}/>);

    let postTextRef = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChange = () => {
        const text = postTextRef.current.value;
        props.dispatch(updateNewPostActionCreator(text));
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
