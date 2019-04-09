import React, { Component } from 'react';

class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {author : "", title: "", text: "", error: false};
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAuthor(event) {
        this.setState({author: event.target.value});
    }

    handleTitle(event) {
        this.setState({title: event.target.value});
    }

    handleText(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h3>Add New Post</h3>
                    <label>
                        Author:
                        <input type="text" value={this.state.author} onChange={this.handleAuthor}/>
                    </label>
                    <label>
                        Title:
                        <input type="text" value={this.state.title} onChange={this.handleTitle}/>
                    </label>
                    <label>
                        Text:
                        <input type="text" value={this.state.text} onChange={this.handleText}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                    {this.state.error && <text>{this.state.error}</text>}
                </div>
            </form>
        )
    }
}

export default AddPost;