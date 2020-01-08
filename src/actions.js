import * as actionTypes from './actionTypes';

export const updateNavText = (text) => {
	return {
		type: actionTypes.UPDATE_NAV_TEXT,
		value: text,
	};
};

export const getPosts = () => ({
	type: actionTypes.GET_POSTS,
});

export const getPostsSuccess = (data) => ({
	type: actionTypes.GET_POSTS_SUCCESS,
	data,
});
