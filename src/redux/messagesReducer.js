const ADD_MSG = "ADD-MSG";
const UPDATE_NEW_MSG_BODY = "UPDATE-NEW-MSG-TEXT";

const messagesReducer = (messagesPageState, action) => {
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
