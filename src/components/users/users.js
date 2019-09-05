import React from "react";
import User from "../layout/User";
import Spinner from "../layout/Spinner";

const users = props => {
  let wheel = null;
  if (props.loading) {
    wheel = <Spinner />;
  }
  return (
    <div className="grid-4">
      {wheel}
      {props.users.map(user => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default users;
