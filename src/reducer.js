import * as actionTypes from './actionTypes';

const state = {
  navText: '123',
  isLoadingGetPosts: false,
  posts: [],
}

// [].reduce()
function reducer(globalState = state, action) {
  console.log(action)
  switch (action.type) {
    case actionTypes.UPDATE_NAV_TEXT:
      return {
        ...globalState,
        navText: action.value,
      };
    case actionTypes.UPDATE_TEST:
      return {
        ...globalState,
        test: action.value,
      };
    case 'GET_POSTS_PENDING':
      return {
        ...globalState,
        isLoadingGetPosts: true,
      };
    case 'GET_POSTS_FULFILLED':
      return {
        ...globalState,
        isLoadingGetPosts: false,
        posts: action.payload.data
      };
    case 'GET_POST_PENDING':
      return {
        ...globalState,
        isLoadingGetPosts: true,
      };
    case 'GET_POST_FULFILLED':
      return {
        ...globalState,
        isLoadingGetPosts: false,
        posts: action.payload.data
      };
    default:
      return globalState;
  }
}

export default reducer;