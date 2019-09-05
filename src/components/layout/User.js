import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const user = props => {
  const { login, avatar_url } = props.user;
  const route = "/user/" + login;

  return (
    <Fragment>
      <div className="card text-center">
        <img alt="Avatar" src={avatar_url} className="round-img" />
        <p>{login}</p>
        <Link to={route}>Visit page</Link>
      </div>
    </Fragment>
  );
};

export default user;
