import {authMe} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializationSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
    return (dispatch) => {
        const firstPromise = dispatch(authMe());
        Promise.all([firstPromise])
            .then(() => {
                dispatch(initializationSuccess());
            })
    }
}
export default appReducer;
