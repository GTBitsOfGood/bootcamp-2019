import React, { Component } from 'react';
import './Post.css'
import Comment from './Comment.js'

class Post extends Component {
  render() {
    const comments = this.props.data.comments
    ? this.props.data.comments.map(item => <Comment key={item._id} data={item}/>)
    : null;

    return (
      <div className="post">
        <p className>Posted by {this.props.data.author}</p>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.text}</p>
        <p>+{this.props.data.upVotes}/-{this.props.data.downVotes}</p>
        {comments}
      </div>
    )
  }
}

export default Post;