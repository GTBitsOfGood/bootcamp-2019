import React, { Component } from 'react';
import './Post.css';
import Comment from './Comment';
import AddComment from './AddComment';

class Post extends Component {

    constructor(props) {
        super(props);
        this.upVotePost = this.upVotePost.bind(this);
        this.downVotePost = this.downVotePost.bind(this);
        this.saveComment = this.saveComment.bind(this);
    }

    upVotePost() {
        this.props.onEdit(this.props.data._id, {
            upVotes: this.props.data.upVotes + 1
        });
    }

    downVotePost() {
        this.props.onEdit(this.props.data._id, {
            downVotes: this.props.data.downVotes + 1
        });
    }

    saveComment(commentData) {
        this.setState({ replyOpen: false });
        this.props.onComment(this.props.data._id, commentData);
    };

    render() {
        return (
            <div>
                <text className="Author"> Posted by {this.props.data.author}</text><br/>
                <text className="Title"> {this.props.data.title} </text><br/>
                <text className="Text"> {this.props.data.text} </text><br/>
                <button className="Vote" onClick={this.upVotePost}> Up + {this.props.data.upVotes} </button>
                <button className="Vote" onClick={this.downVotePost}> Down + {this.props.data.downVotes} </button>
                <button onClick={_ => this.props.onDelete(this.props.data._id)}>Delete</button>
                <button onClick={_ => this.props.toggle(true)}>Reply</button>
                {this.props.data.replyOpen && <AddComment onSubmit={this.saveComment}/>}
                {this.props.data.comments && this.props.data.comments.map(item => <Comment data={item} />)}
            </div>
        )
    }
}

export default Post;

