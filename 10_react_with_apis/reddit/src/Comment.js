import React, { Component } from 'react';
import './Post.css'

class Comment extends Component{

    constructor(props) {
        super(props);
        this.upVoteComment = this.upVoteComment.bind(this);
        this.downVoteComment = this.downVoteComment.bind(this);
    }

    upVoteComment() {
        this.props.onEdit(this.props.data._id, {
            upVotes: this.props.data.upVotes + 1
        });
    }

    downVoteComment() {
        this.props.onEdit(this.props.data._id, {
            downVotes: this.props.data.downVotes + 1
        });
    }

    render() {
        if (this.props.data) {
            return (
                <div>
                    <text className="Author"> Posted by {this.props.data.author}</text><br/>
                    <text className="Text"> {this.props.data.text} </text><br/>
                    <button className="Vote" onClick={this.upVoteComment}> Up + {this.props.data.upVotes} </button>
                    <button className="Vote" onClick={this.downVoteComment}> Down + {this.props.data.downVotes} </button>
                    <button onClick={_ => this.props.onDelete(this.props.data._id)}>Delete</button>
                    {this.props.comments && this.props.data.comments.map(item => <Comment data={item}
                    onDelete={this.props.onCommentDelete}
                    onEdit={this.props.onCommentEdit}/>)}
                </div>
            )
        }
    }
}

export default Comment