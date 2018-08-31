import React from "react";
import { Link } from "react-router-dom";

export default class Links extends React.Component {
  render() {
    return (
      <div>
        <p>This is the Link component!</p>
        <Link to="/">
          <button> back to login </button>
        </Link>
      </div>
    );
  }
}
