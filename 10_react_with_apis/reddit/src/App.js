import React, { Component } from 'react';
import logo from './logo.svg';
import Post from './Post.js'
import './App.css';

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


class App extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-2 ml-4">Yo this is reddit</h1>
        <Post data={postData}/>
      </div>
    );
  }
}

export default App;
