import React, { Component } from 'react';
import './Post.css';
import Comment from './Comment';

class Post extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <text className="Author"> Posted by {this.props.data.author}</text><br/>
                <text className="Title"> {this.props.data.title} </text><br/>
                <text className="Text"> {this.props.data.text} </text><br/>
                <button className="Vote"> Up + {this.props.data.upVotes} </button>
                <button className="Vote"> Down + {this.props.data.downVotes} </button>
                <button onClick={_ => this.props.onDelete(this.props.data._id)}>Delete</button>
                {this.props.data.comments && this.props.data.comments.map(item => <Comment data={item} />)}
            </div>
        )
    }
}

export default Post;

