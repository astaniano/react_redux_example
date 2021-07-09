const ADD_MSG = "ADD-MSG";

type Dialog = {id: number, name: string};
type Message = {id: number, msg: string};

const initialState = {
    dialogs: [
        {id: 1, name: 'Vitya'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Mona'},
        {id: 4, name: 'Brono'},
    ] as Dialog[],
    messages: [
        {id: 1, msg: 'hahahaha'},
        {id: 2, msg: 'gogog'},
    ] as Message[],
}

type ActionType = {
    type: typeof ADD_MSG,
    newMsg: string,
}

type InitialStateType = typeof initialState;

const messagesReducer = (messagesPageState: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_MSG:
            const newMsg = {id: 6, msg: action.newMsg};
            return {
                ...messagesPageState,
                messages: [...messagesPageState.messages, newMsg],
            };
        default:
            return messagesPageState;
    }
}

type SendMsgActionType = {type: typeof ADD_MSG, newMsg: string};

export const sendMsg = (newMsg: string):SendMsgActionType => ({type: ADD_MSG, newMsg});

export default messagesReducer;
