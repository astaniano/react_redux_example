const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [],
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
                users: [...usersPageState.users, ...action.users],
            }
        default:
            return usersPageState;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;