import profileReducer, {addPost, deletePost} from "./profileReducer";

const state = {
    posts: [
        {id: 1, msg: 'jo', likesCount: 12},
        {id: 2, msg: 'gg', likesCount: 11},
        {id: 3, msg: 'ggvv', likesCount: 13},
        {id: 4, msg: 'ffff', likesCount: 14},
    ],
    profile: null,
    userStatus: ""
}

test('length of posts should be incremented', () => {
    const addPostAC = addPost("new msg");

    const newState = profileReducer(state, addPostAC);

    expect(newState.posts.length).toBe(5);
});

test('msg of the new test should be correct', () => {
    const addPostAC = addPost("new msg");

    const newState = profileReducer(state, addPostAC);

    expect(newState.posts[4].msg).toBe("new msg");
});

test('after deleting length of posts should be decremented', () => {
    const addPostAC = deletePost(1);

    const newState = profileReducer(state, addPostAC);

    expect(newState.posts.length).toBe(4);
});