import React, { Component } from 'react';
import './Comment.css'

class Comment extends Component {
  render() {
    const comments = this.props.comment.comments
      ? this.props.comment.comments.map(item => <Comment comment={item}/>)
      : null;

    return (
      <div className="comment">
        <p>Posted by {this.props.comment.author}</p>
        <p>{this.props.comment.text}</p>
        <p>+{this.props.comment.upVotes}/-{this.props.comment.downVotes}</p>
        {comments}
      </div>
    )
  }
}

export default Comment;