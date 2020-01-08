import React, { Component } from 'react';
import './App.css';
import Nav from './containers/NavContainer';
import About from './component/about/';
import Home from './containers/HomeContainer';
import PostList from './containers/PostsContainer';
import Post from './component/post';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <Nav />
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
