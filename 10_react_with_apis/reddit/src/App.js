import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./Post";
import axios from 'axios';
import AddPost from './AddPost';

// const axios = require("axios");
// axios.get("https://bog-reddit.herokuapp.com/api/v1/posts")
//     .then(res => console.log(res.data))
//     .then(console.log("jere"));

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { posts:null };
        this.creatPost = this.creatPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
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
            {this.state.posts && this.state.posts.map(item => <Post data={item} onDelete={this.deletePost} />)}
        </div>
      );
    }
}

export default App;
