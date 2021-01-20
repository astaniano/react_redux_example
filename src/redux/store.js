import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, msg: 'jo', likesCount: 12},
                {id: 2, msg: 'gg', likesCount: 11},
            ],
            newPostText: "",
        },
        messagesPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(renderMethod) {
        this._callSubscriber = renderMethod;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;
