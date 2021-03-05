import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => (
    {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
);

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe().then(res => {
            if (res.data.ResultCode === 0) {
                const {Login: login, Id: userId, Email: email} = res.data.Data;
                dispatch(setAuthUserData(userId, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe = false) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if (res.data.ResultCode === 0) {
                dispatch(authMe())
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(res => {
            if (res.data.ResultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;
