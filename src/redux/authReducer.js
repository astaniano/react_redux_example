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
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => (
    {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
);

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe().then(res => {
            if (res.data.ResultCode === 0) {
                const {Login: login, Id: userId, Email: email} = res.data.Data;
                dispatch(setAuthUserData(userId, email, login));
            }
        })
    }
}


export default authReducer;