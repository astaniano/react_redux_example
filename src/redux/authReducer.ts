import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkDispatch} from 'redux-thunk';

const SET_USER_DATA = "SET_USER_DATA";

type MyState = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
}

const initialState: MyState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

interface MyAction{ type: string, payload: object }

const authReducer = (state: MyState = initialState, action: MyAction) => {
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

export const setAuthUserData = (userId: number | null, email: string | null,
                                login: string | null, isAuth: boolean) => (
    {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
);

// type response

export const authMe = () => {
    return (dispatch: ThunkDispatch<MyState, void, MyAction>) => {
        return authAPI.authMe().then(res => {
            if (res.data.resultCode === 0) {
                const {login, userId, email} = res.data.data;
                dispatch(setAuthUserData(userId, email, login, true));
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe = false) => {
    return (dispatch: ThunkDispatch<MyState, void, MyAction>) => {
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
    return (dispatch: ThunkDispatch<MyState, void, MyAction>) => {
        authAPI.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;
