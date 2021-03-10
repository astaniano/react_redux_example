import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_DISABLE_OF_FOLLOW = "TOGGLE_DISABLE_OF_FOLLOW";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disabledFollowButtons: [],
    fake: 10,
}

const usersReducer = (usersPageState = initialState, action) => {
    switch (action.type) {
        case "FAKE":
            return {...usersPageState, fake: usersPageState.fake + 1};
        case FOLLOW:
            return {
                ...usersPageState,
                users: usersPageState.users.map((u) => {
                    if (u.Id === action.userId) {
                        return {...u, Followed: true};
                    }

                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...usersPageState,
                users: usersPageState.users.map((u) => {
                    if (u.Id === action.userId) {
                        return {...u, Followed: false};
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
                    : usersPageState.disabledFollowButtons.filter((u) => u.id === action.userId)
            }
        default:
            return usersPageState;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPageNumber) => ({type: SET_CURRENT_PAGE, currentPageNumber});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleDisableOfFollow = (isFetching, userId) => ({type: TOGGLE_DISABLE_OF_FOLLOW, isFetching, userId});

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(page, pageSize)
            .then(res => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(res.Users));
                dispatch(setTotalUsersCount(res.TotalCount));
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleDisableOfFollow(true, userId))
        usersAPI.follow(userId).then(res => {
            if (res.data.ResultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleDisableOfFollow(false, userId));
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleDisableOfFollow(true, userId))
        usersAPI.unfollow(userId).then(res => {
            if (res.data.ResultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleDisableOfFollow(false, userId));
        })
    }
}

export default usersReducer;