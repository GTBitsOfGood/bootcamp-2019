import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Post from './Post.js';
import AddPost from './AddPost.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
  axios.get("https://bog-reddit.herokuapp.com/api/v1/posts")
    .then(({data}) => this.setState({ posts: data.posts }))
    .catch(err => console.log(err));
  }

  createPost = postData => {
    axios
      .post("https://bog-reddit.herokuapp.com/api/v1/posts", postData)
      .then(({ data }) => this.setState(state => ({posts: [data.post, ...state.posts]})))
      .catch(console.log)
  }

  deletePost = id => {
    console.log("deletePost was called");
    axios
      .delete(`https://bog-reddit.herokuapp.com/api/v1/posts/${id}`)
      .then(() => {
        this.setState(state => ({
          posts: state.posts.filter(cur => cur._id !== id)
        }));
      })
  };

  editPost = (id, editData) => {
    axios
      .patch(`https://bog-reddit.herokuapp.com/api/v1/posts/${id}`, editData)
      .then(({data}) =>
        this.setState(state => ({
         posts: state.posts.map(post =>
           post._id !== data.post._id ? post : data.post)
      })))
      .catch(console.log);
  };

  createComment = (postId, commentData) => {
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
    console.log("comment saved to Axios: " + postId + commentData)
  }

  render() {
    return (
      <div className="App">
        <h1>Bits of Good Bootcamp – Reddit</h1>
        <AddPost onSubmit={this.createPost}/>
        {this.state.posts.map(item => (
          <Post
            key={item._id}
            post={item}
            onDelete={this.deletePost}
            onEdit={this.editPost}
            onComment={this.createComment}
          />
        ))}
      </div>
    );
  }
}

export default App;
