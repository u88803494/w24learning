import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav'

const NavContainer = (props) => {
  console.log('navCon');
  return <Nav {...props} />
}

const mapStateToProps = state => {
  return {
    navText: state.nav.navText
  }
}

export default connect(mapStateToProps)(NavContainer);
