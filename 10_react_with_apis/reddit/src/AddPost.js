import React, { Component } from 'react';
import './AddPost.css'

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      text: "",
      error: false
    }
  }

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  submit = event => {
    
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Author:
          <input type="text" value={this.state.author} onChange={this.handleChange} />
        </label>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Text:
          <input type="textarea" value={this.state.text} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}