import * as actionTypes from './actionTypes';
import * as WebAPI from './WebAPI';

export const updateNavText = (text) => {
	return {
		type: actionTypes.UPDATE_NAV_TEXT,
		value: text,
	};
};

export const getPostList = () => ({
	type: 'GET_POSTS',
	payload: WebAPI.getPosts(),
})

export const getPost = (id) => ({
	type: 'GET_POST',
	payload: WebAPI.getPost(id),
})
