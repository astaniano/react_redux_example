import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkDispatch} from 'redux-thunk';

const SET_USER_DATA = "SET_USER_DATA";

// type MyStateType = {
//     userId: null | number,
//     email: null | string,
//     login: null | string,
//     isAuth: boolean,
// }

const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as boolean,
}

type MyStateType = typeof initialState;

// type PayloadType = { userId: number, email: string, login: string, isAuth: boolean };
type MyAction = { type: typeof SET_USER_DATA, payload?: MyStateType };

const authReducer = (state: MyStateType = initialState, action: MyAction): MyStateType => {
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
                                login: string | null, isAuth: boolean):
    MyAction => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
}

type AuthResponse = {
    data: {
        resultCode: number,
        data: {
            userId: number;
            email: string;
            login: string;
        }
    }
}

export const authMe = () => {
    return (dispatch: ThunkDispatch<MyStateType, void, MyAction>) => {
        return authAPI.authMe().then((res: AuthResponse) => {
            if (res.data.resultCode === 0) {
                const {login, userId, email} = res.data.data;
                dispatch(setAuthUserData(userId, email, login, true));
            }
        })
    }
}

type LoginResponse = {
    data: {
        resultCode: number,
        data: {
            userId: number;
            email: string;
            login: string;
        }
    }
}

type LoginRes = { data: { resultCode: number, messages: Array<string> } };

export const login = (email: string, password: string, rememberMe = false) => {
    return (dispatch: ThunkDispatch<MyStateType, void, MyAction>) => {
        authAPI.login(email, password, rememberMe).then((res: LoginRes) => {
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
    return (dispatch: ThunkDispatch<MyStateType, void, MyAction>) => {
        authAPI.logout().then((res: LoginRes) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;
