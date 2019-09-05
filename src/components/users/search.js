import React, { useState } from "react";

const Search = ({ setAlert, searchUser }) => {
  const [text, textState] = useState("");

  const onChange = event => {
    setAlert("");

    textState(event.target.value);
  };

  const fireSubmit = event => {
    event.preventDefault();
    if (text === "") {
      setAlert("Can't submit an empty field");
    } else {
      searchUser(text);
      textState("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={fireSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      <h1>{text}</h1>
    </div>
  );
};

export default Search;
