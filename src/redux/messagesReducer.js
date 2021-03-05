const ADD_MSG = "ADD-MSG";

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
}

const messagesReducer = (messagesPageState = initialState, action) => {
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

export const sendMsg = (newMsg) => ({type: ADD_MSG, newMsg});

export default messagesReducer;
