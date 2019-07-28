import React from 'react';
import './App.css';
import './Post.css';
import Comment from './Comment.js';
import AddComment from './AddComment.js';


export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {replyOpen: false};
        this.upVotePost = this.upVotePost.bind(this);
        this.downVotePost = this.downVotePost.bind(this);
        this.changeReply = this.changeReply.bind(this);
        this.saveComment = this.saveComment.bind(this);
    }

    upVotePost() {
        this.props.onEdit(this.props.post._id, {
            upVotes: this.props.post.upVotes + 1
        });
    }
    downVotePost() {
        this.props.onEdit(this.props.post._id, {
            downVotes: this.props.post.downVotes + 1
        });
    }

    changeReply() {
        this.setState({replyOpen: !this.state.replyOpen});
    }

    saveComment(commentData) {
        this.setState({ replyOpen: false });
        this.props.onComment(this.props.post._id, commentData);
    };

    render() {
            return (
                <div className = "PostBorder">
                    <text className="Author"> Posted by {this.props.post.author}</text><br/>
                    <text className="Text"> {this.props.post.text} </text><br/>
                    <button className="Vote" onClick = {this.upVotePost}> Up + {this.props.post.upVotes} </button>
                    <button className="Vote" onClick={this.downVotePost}> Down + {this.props.post.downVotes} </button>
                    {this.props.post.comments && this.props.post.comments.map(item => <Comment
                        data={item}
                        onDelete={this.props.onCommentDelete}
                        onEdit={this.props.onCommentEdit}
                        onComment={this.props.onSubComment}
                    />)}
                    <button onClick={ _ => this.props.onDelete(this.props.post._id)}>Delete</button>
                    <button onClick={this.changeReply}>Reply</button>
                    {this.state.replyOpen && <AddComment onSubmit={this.saveComment}/>}



                </div>
            );
    }
}

