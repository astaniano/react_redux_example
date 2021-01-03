let state = {
	profilePage: {
		posts: [
			{ id: 1, msg: 'jo', likesCount: 12 },
			{ id: 2, msg: 'gg', likesCount: 11 },
		],
	},
	messagesPage: {
		dialogs: [
			{ id: 1, name: 'Vitya' },
			{ id: 2, name: 'Valera' },
			{ id: 3, name: 'Mona' },
			{ id: 4, name: 'Brono' },
		],
		messages: [
			{ id: 1, msg: 'hahahaha' },
			{ id: 2, msg: 'gogog' },
		],
	},
};

export let addPost = (postText) => {
	let newPost = { id: 6, msg: postText, likesCount: 22 };
	state.profilePage.posts.push(newPost);
}

export default state;
