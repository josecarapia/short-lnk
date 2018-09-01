import React from "react";
import { Link } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";

export default class Links extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <p>This is the Link component!</p>

        <button onClick={this.onLogout.bind(this)}> back to login </button>
      </div>
    );
  }
}
