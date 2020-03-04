import React from 'react';
import { connect } from 'react-redux';
import Home from '../component/home';
import { updateNavText } from '../actions';

const HomeContainer = (props) => {
  return <Home {...props} />
}

const mapDispatchToPtops = dispatch => { // connect 內部產生作用
  return {
    updateNav: text => dispatch(updateNavText(text)),
  }
}

export default connect(null, mapDispatchToPtops)(HomeContainer);
