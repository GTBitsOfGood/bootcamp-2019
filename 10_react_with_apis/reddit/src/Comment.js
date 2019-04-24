import * as React from "react";


class Comment extends React.Component {
  render() {
    // return <h1>My comment</h1>
    return (
      <div>
        <div className="mt-4 mb-4 mx-auto card w-75 p-3 rounded" >
          <div className="card-body" >
            <p>Posted by: {this.props.data.author}</p>
            <p>{this.props.data.text}</p>
            <p>Upvotes: {this.props.data.upVotes} Downvotes: {this.props.data.downVotes}</p>
            {this.props.data.comments.map((item) => {
              return <Comment key={item._id} data={item}/>
            })}
          </div>
        </div>


      </div>
    )
  }
}

export default Comment