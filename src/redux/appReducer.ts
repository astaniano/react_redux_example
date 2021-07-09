import {authMe} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

interface ActionType {
    type: string,
    initialized: boolean,
}

type InitialStateType = {
    initialized: boolean,
}

const initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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

type InitializationSuccessActionType = {type: typeof INITIALIZED_SUCCESS};

export const initializationSuccess = (): InitializationSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
    return (dispatch: any) => {
        const firstPromise = dispatch(authMe());
        Promise.all([firstPromise])
            .then(() => {
                dispatch(initializationSuccess());
            })
    }
}
export default appReducer;
