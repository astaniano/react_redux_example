import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
        return authAPI.authMe().then(res => {
            if (res.data.resultCode === 0) {
                const {login, userId, email} = res.data.data;
                dispatch(setAuthUserData(userId, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe = false) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authMe())
            } else {
                const _error = res.data.messages.length > 0 ? res.data.messages[0] : "sorry can not login"
                dispatch(stopSubmit("login", {_error}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;
