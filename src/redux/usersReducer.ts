import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_DISABLE_OF_FOLLOW = "TOGGLE_DISABLE_OF_FOLLOW";

export interface UserPhotosType {
    small: string
}

export interface User {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: UserPhotosType,
    contacts:  {
        github: string,
        youtube: string,
        instagram: string,
        twitter: string,
    },
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disabledFollowButtons: [], // contains userIds
}

interface ActionType {
    type: string,
    userId?: number,
    users?: User[],
    currentPageNumber?: number,
    totalUsersCount?: number,
    isFetching?: boolean,
}

const usersReducer = (usersPageState = initialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...usersPageState,
                users: usersPageState.users.map((u: User) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }

                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...usersPageState,
                users: usersPageState.users.map((u: User) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }

                    return u;
                }),
            }
        case SET_USERS:
            return {
                ...usersPageState,
                users: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...usersPageState,
                currentPage: action.currentPageNumber,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...usersPageState,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...usersPageState,
                isFetching: action.isFetching,
            }
        case TOGGLE_DISABLE_OF_FOLLOW:
            return {
                ...usersPageState,
                disabledFollowButtons: action.isFetching
                    ? [...usersPageState.disabledFollowButtons, action.userId]
                    : usersPageState.disabledFollowButtons.filter((u: User) => u.id === action.userId)
            }
        default:
            return usersPageState;
    }
}

export const followSuccess = (userId: number) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId});
export const setUsers = (users: User[]) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPageNumber: number) => ({type: SET_CURRENT_PAGE, currentPageNumber});
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleDisableOfFollow = (isFetching: boolean, userId: number) => ({type: TOGGLE_DISABLE_OF_FOLLOW, isFetching, userId});

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    const res = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(res.users));
    dispatch(setTotalUsersCount(res.totalCount));
}

export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleDisableOfFollow(true, userId))
    const res = await usersAPI.follow(userId);
    if (res.data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleDisableOfFollow(false, userId));
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(toggleDisableOfFollow(true, userId))
        const res = await usersAPI.unfollow(userId);
        if (res.data.ResultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleDisableOfFollow(false, userId));
    }
}

export default usersReducer;