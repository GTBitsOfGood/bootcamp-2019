import * as React from "react";
import * as _ from "underscore";




class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: '',
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(type, event) {
    this.setState({[type]: event.target.value});
  }

  submit(event) {
    this.setState({error: this.state.author === '' || this.state.text === ''}, () => {
      if (!this.state.error) {
        this.handleSubmit(_.pick(this.state, ['author', 'text']));
      }
    });

    event.preventDefault();
  }
  handleSubmit(data) {
    this.props.onSubmit(data);
  }
  render() {
    return (
      <div>

        <form>
          <label>
            Author:
            <input type="text" value={this.state.author} onChange={(e) => this.handleChange("author", e)} />
            <br/>
            Text:
            <input type="text" value={this.state.text} onChange={(e) => this.handleChange("text", e)} />
          </label>
          <br/>
          <input type="submit" value="Submit"  onClick={this.submit}/>
        </form>
        <h3>{this.state.error && "Make sure all fields  are filled in properly"}</h3>
      </div>
    )
  }
}


export default AddPost;
