import React, { Component, Fragment } from "react";
import axios from "axios";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "../components/layout/Navbar";
import Users from "../components/users/users";
import Search from "../components/users/search";
import Alert from "../components/layout/Alert";
import About from "../components/layout/About";
import UserPreview from "../components/users/user-preview";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: "",
    user: {}
  };
  async componentDidMount() {
    console.log("App did mount is called...");
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  setAlert = msg => {
    this.setState({ alert: msg });
  };

  searchUser = async data => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${data}`
    );
    this.setState({ users: res.data.items, loading: false });
    console.log("SEARCH", this.state);
  };

  getUser = async username => {
    this.setState({ loading: true });
    const user = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ user: user.data, loading: false });
  };

  render() {
    //const { user } = this.state;
    console.log("User in render", this.state);
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <div className="container">
                    {this.state.alert.length > 1 && (
                      <Alert message={this.state.alert} />
                    )}
                    <Search
                      searchUser={this.searchUser}
                      setAlert={this.setAlert}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </div>
                </Fragment>
              )}
            />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <Fragment>
                  <UserPreview
                    {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                  />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
