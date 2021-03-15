import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 3, msg: action.newPostText, likesCount: 22};
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p !== action.postId),
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus,
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const res = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfileAC(res.data));
}


export const getUserStatus = (userId) => async (dispatch) => {
    const res = await profileAPI.getUserStatus(userId);
    if (res.data.resultCode === 0) {
        dispatch(setStatus(res.data.userStatus));
    }
}

export const updateUserStatus = (userId, status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(userId, status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(res.data.userStatus));
            }
        })
    }
}

export const savePhoto = (photo) => async (dispatch) => {
    const res = await profileAPI.savePhoto(photo);
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.photos));
    }
}

export const saveProfileInfo = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const res = await profileAPI.saveProfileInfo(profile); // server is not ready =))
    // if (res.data.resultCode === 0) {
    //     dispatch(getUserProfile(userId));
    // } else {
    //     const _error = res.data.messages.length > 0 ? res.data.messages[0] : "sorry can not update profile info"
        const _error = "sorry can not update profile info"
        // this one works for specific items
        // dispatch(stopSubmit("edit-profile-form", {"contacts" : {"github": _error}}))

        // this is general error handling
        dispatch(stopSubmit("edit-profile-form", {_error}))
        return Promise.reject(_error);
    // }
}

export default profileReducer;