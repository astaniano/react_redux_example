const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (profilePageState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 6, msg: profilePageState.newPostText, likesCount: 22};
            profilePageState.posts.push(newPost);
            profilePageState.newPostText = "";
            return profilePageState;
        case UPDATE_NEW_POST_TEXT:
            profilePageState.newPostText = action.newPostText;
            return profilePageState;
        default:
            return profilePageState;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export default profileReducer;