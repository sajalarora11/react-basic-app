import React, { useEffect } from "react";

const UserPreview = ({ user, getUser, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    // eslint-disable-next-line
  }, []);

  const { login, avatar_url, url, following_url } = user;
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
};

export default UserPreview;
