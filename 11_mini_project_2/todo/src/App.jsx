import React, { Component } from 'react';
import TodoItem from 'TodoItem.jsx';
import './App.css';

let dummyData = ['laundry', 'bank', 'study'];

class App extends Component {
  render() {
    return <ul>
      dummyData.map((item) => {
        return <li><TodoItem /></li>
      });
    </ul>;
  }
}

export default App;
