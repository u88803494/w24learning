import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Post.css';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data,
        })
      })
  }

  render() {
    const { posts } = this.state;
    const { history } = this.props;
    return (
      <div>
        <h1>POST</h1>
        <div className="post-list">
          {posts.map(post => (
            <div className="post-item" key={post.id}>
              <div className="post-item__id" onClick={() => {
                history.push("/post/" + post.id)
              }}>{post.id}</div>
              <div className="post-item__title"> {post.title}</div>
              <div className="post-item__body">{post.body}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(PostList);
