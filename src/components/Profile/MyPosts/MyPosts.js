import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators";
import {Textarea} from "../../common/formcontrol/formControlls";

const maxLength10 = maxLength(10);

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostBody" placeholder="Enter your post"
                   validate={ [required, maxLength10] } />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
};

const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)

const MyPosts = (props) => {
    console.log("MyPosts render");
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
