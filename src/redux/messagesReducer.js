const ADD_MSG = "ADD-MSG";
const UPDATE_NEW_MSG_BODY = "UPDATE-NEW-MSG-TEXT";

const initialState = {
    dialogs: [
        {id: 1, name: 'Vitya'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Mona'},
        {id: 4, name: 'Brono'},
    ],
    messages: [
        {id: 1, msg: 'hahahaha'},
        {id: 2, msg: 'gogog'},
    ],
    newMsgBody: "",
}

const messagesReducer = (messagesPageState = initialState, action) => {
    switch (action.type) {
        case ADD_MSG:
            const newMsg = {id: 6, msg: messagesPageState.newMsgBody};
            return {
                ...messagesPageState,
                messages: [...messagesPageState.messages, newMsg],
                newMsgBody: "",
            };
        case UPDATE_NEW_MSG_BODY:
            return {
                ...messagesPageState,
                newMsgBody: action.newMsgBody,
            };
        default:
            return messagesPageState;
    }
}

export const addMsgCreator = () => ({type: ADD_MSG});
export const updateNewMsgCreator = (msgBody) => ({type: UPDATE_NEW_MSG_BODY, newMsgBody: msgBody});

export default messagesReducer;
