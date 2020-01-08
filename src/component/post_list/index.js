import React, { Component } from 'react';
import './Post.css';

class PostList extends Component {
  componentDidMount() {
    this.props.getPostList();
  }

  render() {
    const { history, posts } = this.props;
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

export default PostList;
