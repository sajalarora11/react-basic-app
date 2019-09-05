import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "../components/layout/Navbar";
import Users from "../components/users/users";
import Search from "../components/users/search";
import Alert from "../components/layout/Alert";
import About from "../components/layout/About";
import UserPreview from "../components/users/user-preview";

const App = props => {
  const [users, usersState] = useState([]);
  const [user, userState] = useState({});
  const [alert, alertState] = useState("");
  const [loading, loadingState] = useState(false);

  useEffect(() => {
    loadingState(true);
    axios.get("https://api.github.com/users").then(res => {
      usersState(res.data);
      loadingState(false);
    });
  }, []);

  const setAlert = msg => {
    alertState(msg);
  };

  const searchUser = async data => {
    loadingState(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${data}`
    );
    usersState(res.data.items);
    loadingState(false);
  };

  const getUser = async username => {
    loadingState(true);
    const user = await axios.get(`https://api.github.com/users/${username}`);
    userState(user.data);
    loadingState(false);
  };

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
                  {alert.length > 1 && <Alert message={alert} />}
                  <Search searchUser={searchUser} setAlert={setAlert} />
                  <Users loading={loading} users={users} />
                </div>
              </Fragment>
            )}
          />
          <Route
            exact
            path="/user/:login"
            render={props => (
              <Fragment>
                <UserPreview {...props} getUser={getUser} user={user} />
              </Fragment>
            )}
          />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
