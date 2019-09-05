import React, { Component } from "react";

class UserPreview extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const { login, avatar_url, url, following_url } = this.props.user;
    return (
      <div className="grid">
        <h1>{login}</h1>
        <img alt="avatar" className="Img-round" src={avatar_url} />
        <a href={url}>
          Visit Profile<button></button>
        </a>{" "}
        <br />
        <a href={following_url}>
          <button>Follow on Github</button>
        </a>
      </div>
    );
  }
}

export default UserPreview;
