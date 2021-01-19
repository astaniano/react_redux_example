const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ADD_MSG = "ADD-MSG";
const UPDATE_NEW_MSG_BODY = "UPDATE-NEW-MSG-TEXT";

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
    },
    _renderEntireTree() {
    },

    getState() {
        return this._state;
    },
    setRenderMethod(renderMethod) {
        this._renderEntireTree = renderMethod;
    },

    _addPost() {
        let newPost = {id: 6, msg: this._state.profilePage.newPostText, likesCount: 22};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";

        this._renderEntireTree(this._state);
    },
    _updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;

        this._renderEntireTree(this._state);
    },

    _addMsg() {
        debugger
        const newMsg = {id: 6, msg: this._state.messagesPage.newMsgBody};
        this._state.messagesPage.messages.push(newMsg);
        this._state.messagesPage.newMsgBody = "";

        this._renderEntireTree(this._state);
    },
    _updateNewMsgBody(newMsgBody) {
        this._state.messagesPage.newMsgBody = newMsgBody;

        this._renderEntireTree(this._state);
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newPostText);
                break;
            case ADD_MSG:
                this._addMsg();
                break;
            case UPDATE_NEW_MSG_BODY:
                this._updateNewMsgBody(action.newMsgBody);
                break;
            default:
                console.log("could not find action")
        }
    }
}

window.store = store;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export const addMsgCreator = () => ({type: ADD_MSG});
export const updateNewMsgCreator = (msgBody) => ({type: UPDATE_NEW_MSG_BODY, newMsgBody: msgBody});

export default store;
