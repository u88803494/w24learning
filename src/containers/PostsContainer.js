import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Posts from '../component/post_list';
import * as WebAPI from '../WebAPI';
import * as actions from '../actions'

const PostsContainer = (props) => {
  return <Posts {...props} />
}

const mapStateToProps = state => {
  return {
    isLoadingGetPosts: state.nav.isLoadingGetPosts,
    posts: state.nav.posts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPostList: () => {
      dispatch(actions.getPosts())
      WebAPI.getPosts().then(res => {
        dispatch(actions.getPostsSuccess(res.data))
      })
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
);
