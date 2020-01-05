import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux'
import { updateNavText } from '../actions';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="homepage">I am homepage</div>
        <button onClick={
          () => {
            this.props.updateNav(Math.random())
          }
        }>click me</button>
      </div>
    );
  }
}

const mapDispatchToPtops = dispatch => {
  return {
    updateNav: text => dispatch(updateNavText(text)),
  }
}


export default connect(null, mapDispatchToPtops)(Home);
