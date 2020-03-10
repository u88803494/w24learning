import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Posts from '../component/post_list';
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
    getPostList: () => dispatch(actions.getPostList())
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
);
