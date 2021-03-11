import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
    posts: [
        {id: 1, msg: 'jo', likesCount: 12},
        {id: 2, msg: 'gg', likesCount: 11},
        {id: 3, msg: 'ggvv', likesCount: 13},
        {id: 4, msg: 'ffff', likesCount: 14},
    ],
    profile: null,
    userStatus: ""
}

const profileReducer = (profilePageState = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 3, msg: action.newPostText, likesCount: 22};
            return {
                ...profilePageState,
                posts: [...profilePageState.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...profilePageState,
                profile: action.profile,
            }
        case SET_USER_STATUS:
            return {
                ...profilePageState,
                userStatus: action.userStatus,
            }
        default:
            return profilePageState;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(res => {
            dispatch(setUserProfileAC(res.data));
        })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(res => {
            if (res.data.ResultCode === 0) {
                dispatch(setStatus(res.data.UserStatus));
            }
        })
    }
}

export const updateUserStatus = (userId, status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(userId, status).then(res => {
            if (res.data.ResultCode === 0) {
                dispatch(setStatus(res.data.UserStatus));
            }
        })
    }
}

export default profileReducer;