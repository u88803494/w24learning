import * as actionTypes from './actionTypes';

const state = {
  navText: '123',
  isLoadingGetPosts: false,
  posts: [],
}

// [].reduce()
function reducer(globalState = state, action) {
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
    case actionTypes.GET_POSTS:
      return {
        ...globalState,
        isLoadingGetPosts: true,
      };
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...globalState,
        isLoadingGetPosts: false,
        posts: action.data
      };
    default:
      return globalState;
  }
}

export default reducer;