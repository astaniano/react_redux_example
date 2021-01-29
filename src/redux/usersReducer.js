const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (usersPageState = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...usersPageState,
                users: usersPageState.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }

                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...usersPageState,
                users: usersPageState.users.map((u) => {
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
        default:
            return usersPageState;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPageNumber) => ({type: SET_CURRENT_PAGE, currentPageNumber});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export default usersReducer;