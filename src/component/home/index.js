import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="homepage">I am homepage</div>
        <button onClick={
          () => {
            this.props.updateNav(Math.random()); // 來自 Connect
          }
        }>click me</button>
      </div>
    );
  }
}

export default Home;
