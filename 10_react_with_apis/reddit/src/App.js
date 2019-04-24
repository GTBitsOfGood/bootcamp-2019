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
    this.toggleReplyOpen = this.toggleReplyOpen.bind(this);
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

  toggleReplyOpen() {
    console.log(this.state);
    this.setState({replyOpen: !this.state.replyOpen});
  }

  render() {
    return (
      <div>
        <h1 className="mt-2 ml-4">Yo this is reddit</h1>
        <AddPost onSubmit={this.createPost}/>
        {this.state.posts.map((post) => {
          return <Post key={post._id} data={post} onReply={this.toggleReplyOpen} onDelete={this.deletePost} onEdit={this.editPost}/>;

        })}
        {/*<Post data={postData}/>*/}
      </div>
    );
  }
}

export default App;
