import * as React from "react";
import Comment from './Comment.js';
import 'bootstrap/dist/css/bootstrap.css';

class Post extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div>
        <div className="ml-4 mr-4 mb-4 card card-body">
          <h2>Author: {this.props.data.author}</h2>
          <h2>Title: {this.props.data.title}</h2>
          <h3>{this.props.data.text}</h3>
          <h4>Up votes: {this.props.data.upVotes}</h4>
          <h4>Down votes: {this.props.data.downVotes}</h4>
        </div>
        <h3 className="ml-4">Comments: </h3>
        {this.props.data.comments.map((item) => {
          return <Comment data={item}/>
        })}
        {/*<Comment/>*/}
        {/*<Comment/>*/}
      </div>
    );
  }
}


export default Post