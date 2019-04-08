import React, { Component } from 'react';
import './Post.css'

class Comment extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data) {
            return (
                <div>
                    <text className="Author"> Posted by {this.props.data.author}</text><br/>
                    <text className="Text"> {this.props.data.text} </text><br/>
                    <button className="Vote"> Up + {this.props.data.upVotes} </button>
                    <button className="Vote"> Down + {this.props.data.downVotes} </button>
                    {this.props.comments && this.props.data.comments.map(item => <Comment data={item} />)}
                </div>
            )
        }
    }
}

export default Comment