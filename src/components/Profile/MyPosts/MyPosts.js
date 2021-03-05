import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newPostBody" placeholder="Enter your post" />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
};

const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)

const MyPosts = (props) => {
    const posts = props.posts.map((post) => <Post msg={post.msg} likesCount={post.likesCount} key={post.id}/>);

    const addPost = (formData) => {
        props.addPost(formData.newPostBody);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <AddPostReduxForm onSubmit={addPost}/>

            <div className={s.posts}>{posts}</div>
        </div>
    );
};

export default MyPosts;
