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
            messagesPageState.messages.push(newMsg);
            messagesPageState.newMsgBody = "";
            return messagesPageState;
        case UPDATE_NEW_MSG_BODY:
            messagesPageState.newMsgBody = action.newMsgBody;
            return messagesPageState;
        default:
            return messagesPageState;
    }
}

export const addMsgCreator = () => ({type: ADD_MSG});
export const updateNewMsgCreator = (msgBody) => ({type: UPDATE_NEW_MSG_BODY, newMsgBody: msgBody});

export default messagesReducer;
