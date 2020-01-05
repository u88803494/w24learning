import React, { Component } from 'react';
import './App.css';
import NavContainer from './nav';
import About from './about';
import Home from './home';
import PostList from './post_list';
import Post from './post';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <NavContainer />
          <div className="page">
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={PostList} />
            <Route path="/about" component={About} />
            <Route path="/post/:postId" component={Post} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
