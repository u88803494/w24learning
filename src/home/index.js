import React, { Component } from 'react';
import './home.css';
import { dispatch } from '../globalState';
import { updateNavText } from '../actions';

const style = {
  homepage: {
    fontSize: '40px',
    paddingTop: '10px',
  }
}

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div style={style.homppage}>I am homepage</div>
        <button onClick={
          () => {
            dispatch(updateNavText(Math.random()))
          }
        }>click me</button>
      </div>
    );
  }
}

export default Home;
