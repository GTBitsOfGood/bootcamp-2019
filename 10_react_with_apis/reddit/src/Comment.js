import * as React from "react";
import AddComment from "./AddComment";


class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {replyOpen: false};
    this.saveComment = this.saveComment.bind(this);

  }

  upVoteComment() {
    this.props.onEdit(this.props.data._id, {upVotes: this.props.data.upVotes + 1})
  }
  downVoteComment() {
    this.props.onEdit(this.props.data._id, {downVotes: this.props.data.downVotes + 1})
  }
  onReply() {
    this.setState({replyOpen: !this.state.replyOpen});
  }
  saveComment(commentData) {
    this.setState({replyOpen: false});
    this.props.onComment(this.props.data._id, commentData);
  }

  render() {
    return (
      <div>
        <div className="mt-4 mb-4 mx-auto card w-75 p-3 rounded" >
          <div className="card-body" >
            <p>Posted by: {this.props.data.author}</p>
            <p>{this.props.data.text}</p>
            <p>Rating: {this.props.data.upVotes - this.props.data.downVotes}</p>
            {this.props.data.comments.map((item) => {
              return <Comment onComment={this.props.onComment} onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={item._id} data={item}/>
            })}
          </div>
          <button onClick={_ => this.upVoteComment()}>
            Upvote
          </button>
          <button onClick={_ => this.downVoteComment()}>
            Downvote
          </button>
          <button onClick={ _ => this.onReply()}>
            Reply
          </button>
          <button onClick={_ => this.props.onDelete(this.props.data._id)}>
            Delete
          </button>
          {this.state.replyOpen && <AddComment onSubmit={this.saveComment}/>}
        </div>


      </div>
    )
  }
}

export default Comment