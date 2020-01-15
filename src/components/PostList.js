import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions";

import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderBlogList() {
    return this.props.postData.map(data => {
      return (
        <div className="item" key={data.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{data.title}</h2>
              <p>{data.body}</p>
            </div>
            <UserHeader userId={data.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <div className="ui relaxed divided list">{this.renderBlogList()}</div>
      </>
    );
  }
}

const mapStateToPros = state => {
  return {
    postData: state.posts
  };
};

export default connect(mapStateToPros, { fetchPosts })(PostList);
