import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../../WebAPI'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    }
  }

  componentDidMount() {
    const { postId } = this.props.match.params;
    getPost(postId)
      .then(res => {
        this.setState({
          post: res.data,
        })
      })
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <h1>POST</h1>
        <Link to="/post"><button> back </button> </Link>
        <div>
          <h1>{post.title ? post.title : 'Loading'}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    );

  }
}

export default Posts;
