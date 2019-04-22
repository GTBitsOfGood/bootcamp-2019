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

  submit = () => {
    const { author, title, text } = this.state;
    if (author === "") {
      this.setState({ error: "Please provide an author!" });
    } else if (title === "") {
      this.setState({ error: "Please provide a title!" });
    } else if (text === "") {
      this.setState({ error: "Please provide post text!" });
    } else {
      this.setState({ author: "", title: "", text: "", error: false });
      this.props.onSubmit({ author, title, text });
    }
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Author:
          <input type="text" value={this.state.author} onChange={event => this.setState({author: event.target.value})} />
        </label>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={event => this.setState({title: event.target.value})} />
        </label>
        <label>
          Text:
          <input type="textarea" value={this.state.text} onChange={event => this.setState({text: event.target.value})} />
        </label>
        <input type="submit" value="Submit" />
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    )
  }
}

export default AddPost;