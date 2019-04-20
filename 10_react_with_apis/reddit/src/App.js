import  React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./Post";
import axios from 'axios';
import AddPost from './AddPost';
import AddComment from './AddComment';

// const axios = require("axios");
// axios.get("https://bog-reddit.herokuapp.com/api/v1/posts")
//     .then(res => console.log(res.data))
//     .then(console.log("jere"));

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { posts: null };
        this.creatPost = this.creatPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.createComment = this.createComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.createSubComment = this.createSubComment.bind(this);
    }

    creatPost(postData) {
        axios
            .post("https://bog-reddit.herokuapp.com/api/v1/posts", postData)
            .then(({ data }) =>
                this.setState(state => ({
                    posts: [data.post, ...state.posts]
                }))
            )
            .catch(console.log);
    }

    deletePost(id) {
        axios
            .delete(`https://bog-reddit.herokuapp.com/api/v1/posts/${id}`)
            .then(_ => {
                this.setState(state => ({
                    posts: state.posts.filter(cur => cur._id !== id)
                }));
            });
    }

    editPost(id, editData) {
        axios
            .patch(`https://bog-reddit.herokuapp.com/api/v1/posts/${id}`, editData)
            .then(({ data }) => {
                this.setState(state => ({
                    posts: state.posts.map(cur =>
                    cur._id === data.post._id ? data.post : cur)
                }))
            })
            .catch(console.log);
    }

    editComment(id, editData) {
        axios
            .patch(`https://bog-reddit.herokuapp.com/api/v1/comments/${id}`, editData)
            .then(_ => axios.get("https://bog-reddit.herokuapp.com/api/v1/posts"))
            .then(({data}) => this.setState({posts: data.posts}))
            .catch(console.log);
    }

    deleteComment(id) {
        axios
            .delete(`https://bog-reddit.herokuapp.com/api/v1/comments/${id}`)
            .then(_ => axios.get("https://bog-reddit.herokuapp.com/api/v1/posts"))
                .then(({data}) => this.setState({posts: data.posts}));
    }

    createComment(postId, commentData) {
        axios
            .post(
                `https://bog-reddit.herokuapp.com/api/v1/posts/${postId}/comment`,
                commentData
            )
            .then(({ data }) =>
                this.setState(state => ({
                    posts: state.posts.map(cur =>
                        cur._id === data.post._id ? data.post : cur
                    )
                }))
            )
            .catch(console.log);
    }

    createSubComment(commentId, commentData) {
        axios
            .post(`https://bog-reddit.herokuapp.com/api/v1/comments/${commentId}/comment`,
            commentData)
            .then(_ => axios.get("https://bog-reddit.herokuapp.com/api/v1/posts"))
            .then(({data}) => this.setState({posts: data.posts}))
    }

    componentDidMount() {
        axios.get("https://bog-reddit.herokuapp.com/api/v1/posts")
            .then(({data}) => this.setState({posts: data.posts}))
            .catch(err => console.log(err));
    }


    render() {
      return (
        <div>
            <h1>Bits of Good Bootcamp -- Reddit</h1>
            <AddPost onSubmit={this.creatPost}/>
            {this.state.posts &&
            this.state.posts.map(item =>
                <Post
                    data={item}
                    onDelete={this.deletePost}
                    onEdit={this.editPost}
                    onComment={this.createComment}
                    onCommentDelete={this.deleteComment}
                    onCommentEdit={this.editComment}
                    onSubComment={this.createSubComment}
                    />)}
        </div>
      );
    }
}

export default App;
