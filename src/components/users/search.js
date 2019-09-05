import React, { Component } from "react";
class search extends Component {
  state = {
    text: ""
  };

  onChange = event => {
    this.props.setAlert("");

    this.setState({
      text: event.target.value
    });
  };

  fireSubmit = event => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Can't submit an empty field");
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.fireSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default search;
