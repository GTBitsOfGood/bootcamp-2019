import React, { Component } from 'react';
import './Post.css'
import Comment from './Comment.js'
import AddComment from './AddComment.js'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyOpen: false
    };
  }

  upVotePost = () => {
    this.props.onEdit(this.props.post._id, {
      upVotes: this.props.post.upVotes + 1
    });
  };

  downVotePost = () => {
    this.props.onEdit(this.props.post._id, {
      downVotes: this.props.post.downVotes + 1
    });
  };

  saveComment = commentData => {
    this.setState({
      replyOpen: false
    });
    this.props.onComment(this.props.post._id, commentData);
  }

  render() {
    const comments = this.props.post.comments
    ? this.props.post.comments.map(item => <Comment key={item._id} comment={item}/>)
    : null;

    return (
      <div className="post">
        <p>Posted by {this.props.post.author}</p>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.text}</p>
        <p>+{this.props.post.upVotes}/-{this.props.post.downVotes}</p>
        <button onClick={this.upVotePost}>↑</button>
        <button onClick={this.downVotePost}>↓</button>
        {comments}
        <button onClick={() => this.props.onDelete(this.props.post._id)}>Delete</button>
        <button onClick={() => this.setState( {replyOpen: !this.state.replyOpen})}>Reply</button>
        {this.state.replyOpen && <AddComment onSubmit={this.saveComment}/>}
      </div>
    )
  }
}

export default Post;