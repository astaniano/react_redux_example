const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, msg: 'jo', likesCount: 12},
                {id: 2, msg: 'gg', likesCount: 11},
            ],
            newPostText: "it go",
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

    addPost() {
        let newPost = {id: 6, msg: this._state.profilePage.newPostText, likesCount: 22};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ""

        this._renderEntireTree(this._state);
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;

        this._renderEntireTree(this._state);
    },

}

window.store = store;

export default store;
