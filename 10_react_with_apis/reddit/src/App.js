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
          />
        ))}
      </div>
    );
  }
}

const postData = {
  id: "1",
  author: "John Smith",
  title: "Hello World",
  text: `In ex duis culpa labore est voluptate proident esse. Fugiat
  exercitation laborum dolore aute commodo dolore Lorem est nisi Lorem
  sint ex reprehenderit proident. Excepteur consequat amet laborum velit
  est velit culpa id esse nisi eiusmod enim enim. Sint sit culpa magna
  Lorem ea sunt aliquip minim culpa aliquip eiusmod officia aliquip.`,
  upVotes: 10,
  downVotes: 1,
  comments: [
    {
      id: "2",
      author: "Jane Doe",
      text: `Sunt reprehenderit et veniam in nostrud ipsum duis mollit non eiusmod consectetur eu minim laborum.`,
      upVotes: 3,
      downVotes: 1,
      comments: [
        {
          id: "3",
          author: "John Smith",
          text: `Sunt reprehenderit et veniam in nostrud ipsum duis mollit non eiusmod consectetur eu minim laborum.`,
          upVotes: 5,
          downVotes: 1,
          comments: []
        }
      ]
    }
  ]
};

export default App;
