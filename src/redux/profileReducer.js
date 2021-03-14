import {profileAPI} from "../api/api";

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
                profile: {...state.profile, Photos: action.photos},
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

export const savePhoto = (photo) => async (dispatch) => {
    const res = await profileAPI.savePhoto(photo);
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.photos));
    }
}

export default profileReducer;