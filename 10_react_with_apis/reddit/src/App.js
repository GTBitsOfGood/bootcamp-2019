import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./Post";
import axios from 'axios';

// const axios = require("axios");
// axios.get("https://bog-reddit.herokuapp.com/api/v1/posts")
//     .then(res => console.log(res.data))
//     .then(console.log("jere"));

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { posts: null };

    }

    componentDidMount() {
        axios.get("https://bog-reddit.herokuapp.com/api/v1/posts")
            .then(posts => this.setState({ posts }))
            .catch(err => console.log(err));
    }


    render() {
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
      return (
        <div>
            {/*<h1> Bits of Good Bootcamp -- Reddit </h1>*/}
            <Post data={this.state.posts}/>
            {/*{this.state.posts}*/}
        </div>
      );
    }
}

export default App;
