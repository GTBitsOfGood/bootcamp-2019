import React, { Component } from 'react';

class AddComment extends Component {

    constructor(props) {
        super(props);
        this.state = {author : "", text: "", error: false};
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAuthor(event) {
        this.setState({author: event.target.value});
    }

    handleText(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const { author, text } = this.state;
        if (author === "") {
            this.setState({ error: "Please provide an author!" });
        } else if (text === "") {
            this.setState({ error: "Please provide post text!" });
        } else {
            this.setState({ author: "", text: "", error: false });
            this.props.onSubmit({ author, text });
        }
    }

    render() {
        return (
            <form onClick={this.handleSubmit}>
                <div>
                    <label>
                        Author:
                        <input type="text" value={this.state.author} onChange={this.handleAuthor}/>
                    </label>
                    <br/>
                    <label>
                        Your reply...
                        <br/>
                        <textarea value={this.state.text} onChange={this.handleText}></textarea>
                    </label>
                    <input type="submit" value="Submit" />
                    {this.state.error && <text>{this.state.error}</text>}
                </div>
            </form>
        )
    }
}

export default AddComment;