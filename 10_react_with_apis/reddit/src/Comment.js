import React from 'react';
import './App.css';
import './Comment.css';
import AddComment from './AddComment.js';

export default class Comment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {replyOpen: false};
        this.upVoteComment = this.upVoteComment.bind(this);
        this.downVoteComment = this.downVoteComment.bind(this);
        this.changeReply = this.changeReply.bind(this);
        this.saveComment = this.saveComment.bind(this);
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

    changeReply() {
        this.setState({replyOpen: !this.state.replyOpen});
    }

    saveComment(commentData) {
        this.setState({ replyOpen: false });
        this.props.onComment(this.props.data._id, commentData);
    };

    render() {
        if (this.props.data) {
            return (
                <div className = "PostBorder">
                    <text className="Author"> Posted by {this.props.data.author}</text><br/>
                    <text className="Text"> {this.props.data.text} </text><br/>
                    <button className="Vote" onClick={this.upVoteComment}> Up + {this.props.data.upVotes} </button>
                    <button className="Vote" onClick={this.downVoteComment}> Down + {this.props.data.downVotes} </button>
                    <button onClick={_ => this.props.onDelete(this.props.data._id)}>Delete</button>
                    <button onClick={this.changeReply}>Reply</button>
                    {this.state.replyOpen && <AddComment onSubmit={this.saveComment}/>}
                    {this.props.data.comments && this.props.data.comments.map(item => <Comment
                        data={item}
                        onDelete={this.props.onDelete}
                        onEdit={this.props.onEdit}
                        onComment={this.props.onComment}/>)}
                </div>
            )
        } else {
            return null;
        }
    }



}

