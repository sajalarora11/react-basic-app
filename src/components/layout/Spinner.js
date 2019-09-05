import React, { Fragment } from "react";

import spinner from "../../assets/spinner.gif";

const Spinner = props => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading"
        style={{
          width: "100px",
          margin: "auto",
          display: "block"
        }}
      />
    </Fragment>
  );
};

export default Spinner;
