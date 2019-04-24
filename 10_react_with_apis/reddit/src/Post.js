import * as React from "react";
import Comment from './Comment.js';
import 'bootstrap/dist/css/bootstrap.css';
import AddComment from "./AddComment";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.upVotePost = this.upVotePost.bind(this);
    this.downVotePost = this.downVotePost.bind(this);
  }

  upVotePost() {
    this.props.onEdit(this.props.data._id, {upVotes: this.props.data.upVotes + 1})
  }

  downVotePost() {
    this.props.onEdit(this.props.data._id, {downVotes: this.props.data.downVotes + 1})
  }

  render() {
    return (
      <div className="ml-4 mr-4 mb-4 card card-body">
        <div className="ml-4 mr-4 mb-4 card card-body">
          <h2>Author: {this.props.data.author}</h2>
          <h2>Title: {this.props.data.title}</h2>
          <h3>{this.props.data.text}</h3>
          <h4>Rating: {this.props.data.upVotes - this.props.data.downVotes}</h4>
          <button onClick={ _ => this.upVotePost()}>
            Upvote Post
          </button>
          <button onClick={ _ => this.downVotePost()}>
            Downvote Post
          </button>
          <button onClick={ _ => this.props.onDelete(this.props.data._id)}>
            Delete
          </button>
          <button onClick={ _ => this.props.onReply()}>
            Reply
          </button>
        </div>
        {this.state.replyOpen && <AddComment />}
        <h3 className="ml-4">Comments: </h3>
        {this.props.data.comments.map((item) => {
          return <Comment key={item._id}  data={item}/>
        })}
      </div>
    );
  }
}


export default Post