import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    posts: [
        {id: 1, msg: 'jo', likesCount: 12},
        {id: 2, msg: 'gg', likesCount: 11},
    ],
    newPostText: "",
    profile: null,
}

const profileReducer = (profilePageState = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 3, msg: profilePageState.newPostText, likesCount: 22};
            return {
                ...profilePageState,
                posts: [...profilePageState.posts, newPost],
                newPostText: "",
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...profilePageState,
                newPostText: action.newPostText,
            }
        case SET_USER_PROFILE:
            return {
                ...profilePageState,
                profile: action.profile,
            }
        default:
            return profilePageState;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(res => {
            dispatch(setUserProfileAC(res.data));
        })
    }
}

export default profileReducer;