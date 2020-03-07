import * as actionTypes from './actionTypes';
import * as WebAPI from './WebAPI';

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

export const getPostList = () => {
	return function (dispatch) {
		dispatch(getPosts())
		WebAPI.getPosts().then(res => {
			dispatch(getPostsSuccess(res.data))
		})
	}
}