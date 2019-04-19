import React, { Component } from 'react';
import './Comment.css'

class Comment extends Component {
  render() {
    const comments = this.props.data.comments
      ? this.props.data.comments.map(item => <Comment data={item}/>)
      : null;

    return (
      <div className="comment">
        <p className>Posted by {this.props.data.author}</p>
        <p>{this.props.data.text}</p>
        <p>+{this.props.data.upVotes}/-{this.props.data.downVotes}</p>
        {comments}
      </div>
    )
  }
}

export default Comment;