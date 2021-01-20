const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    posts: [
        {id: 1, msg: 'jo', likesCount: 12},
        {id: 2, msg: 'gg', likesCount: 11},
    ],
    newPostText: "",
}

const profileReducer = (profilePageState = initialState, action) => {
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