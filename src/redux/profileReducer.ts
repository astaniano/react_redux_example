import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {UserPhotosType, User} from "./usersReducer";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

type Post = { id: number, msg: string, likesCount: number };

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

type InitialStateType = { posts: Post[], profile: User | null, userStatus: string };

interface ActionType {
    type: string,
    newPostText: string,
    postId: number,
    profile: User,
    userStatus: string,
    photos: UserPhotosType
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType) => {
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
                posts: state.posts.filter((p) => p.id !== action.postId),
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

export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText});
export const deletePost = (postId: number) => ({type: DELETE_POST, postId});
export const setUserProfileAC = (profile: User) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (userStatus: string) => ({type: SET_USER_STATUS, userStatus});
export const savePhotoSuccess = (photos: UserPhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const res = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfileAC(res.data));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const res = await profileAPI.getUserStatus(userId);
    if (res.data.resultCode === 0) {
        dispatch(setStatus(res.data.userStatus));
    }
}

export const updateUserStatus = (userId: number, status: string) => {
    return async (dispatch: any) => {
        const res = await profileAPI.updateUserStatus(userId, status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(res.data.userStatus));
        }
    }
}

export const savePhoto = (photo: any) => async (dispatch: any) => {
    const res = await profileAPI.savePhoto(photo);
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.photos));
    }
}

export const saveProfileInfo = (profile: User) => async (dispatch: any, getState: any) => {
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