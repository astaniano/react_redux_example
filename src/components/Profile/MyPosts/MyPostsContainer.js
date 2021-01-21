import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const onPostChange = (text) => {
                        store.dispatch(updateNewPostActionCreator(text));
                    }

                    return (
                        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}/>
                    );
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
