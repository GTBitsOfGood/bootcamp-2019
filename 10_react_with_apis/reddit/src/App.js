import React, { Component } from 'react';
import Post from './Post.js'
import AddPost from './AddPost.js'
import axios from 'axios';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      replyOpen: false
    };

    this.createPost = this.createPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.createComment = this.createComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.editComment = this.editComment.bind(this);
    this.createSubComment = this.createSubComment.bind(this);
  }

  createSubComment(commentId, commentData) {
    axios.post("https://bog-reddit.herokuapp.com/api/v1/comments/" + commentId + "/comment", commentData).then((response) => {
      axios.get('https://bog-reddit.herokuapp.com/api/v1/posts').then((response) => {
        this.setState({posts: response.data.posts});
      }).catch((err) => console.log("Something went wrong", err));
    });
  }
  editComment(id, editData) {
    axios.patch("https://bog-reddit.herokuapp.com/api/v1/comments/" + id, editData).then(_ => {
      axios.get('https://bog-reddit.herokuapp.com/api/v1/posts').then((response) => {
        this.setState({posts: response.data.posts});
      }).catch((err) => console.log("Something went wrong", err));
    });
  }
  deleteComment(id) {
    axios.delete("https://bog-reddit.herokuapp.com/api/v1/comments/" + id).then(_ => {
      axios.get('https://bog-reddit.herokuapp.com/api/v1/posts').then((response) => {
        this.setState({posts: response.data.posts});
      }).catch((err) => console.log("Something went wrong", err));
    }).catch((err) => console.log("Something went wrong", err));
  }
  createComment(postId, commentData) {
    axios.post("https://bog-reddit.herokuapp.com/api/v1/posts/" + postId + "/comment", commentData).then((response) => {
      console.log(response)
      this.setState(state => ({
        posts: state.posts.map(cur =>
          cur._id === response.data.post._id ? response.data.post : cur
        )
      }));
    })
  }
  deletePost(id) {
    axios.delete("https://bog-reddit.herokuapp.com/api/v1/posts/" + id).then(_ => {
      this.setState(state => ({
        posts: state.posts.filter(item =>
           item._id !== id
        )}))
      });
  }
  editPost(id, editData) {
    axios.patch("https://bog-reddit.herokuapp.com/api/v1/posts/" + id, editData).then(returnData => {
      this.setState(state => ({
        posts: state.posts.map((item) => {
          console.log(item);
          return item._id === returnData.data.post._id ? returnData.data.post : item
        })
      }));
    });
  }
  createPost(postData) {
    axios.post("https://bog-reddit.herokuapp.com/api/v1/posts", postData).then((response) => {
      this.setState(state => ({posts: [response.data.post, ...state.posts]}));
    }).catch((e) => {
        console.log(e);
      }
    );

  }
  componentDidMount() {
    axios.get('https://bog-reddit.herokuapp.com/api/v1/posts').then((response) => {
      this.setState({posts: response.data.posts});
    }).catch((err) => console.log("Something went wrong", err));
  }

  render() {
    return (
      <div>
        <h1 className="mt-2 ml-4">Yo this is reddit</h1>
        <AddPost onSubmit={this.createPost}/>
        {this.state.posts.map((post) => {
          return <Post key={post._id} data={post} onSubComment={this.createSubComment} onDelete={this.deletePost} onEdit={this.editPost} onCommentEdit={this.editComment} onCommentDelete={this.deleteComment} onComment={this.createComment}/>;

        })}
        {/*<Post data={postData}/>*/}
      </div>
    );
  }
}

export default App;
