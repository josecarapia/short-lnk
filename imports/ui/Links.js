import React from "react";
import { Link } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
import { Linkss } from "../api/links";
import LinksList from "./LinksList";

export default class Links extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  onSubmit(e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      Meteor.call("links.insert", url);
      //Linkss.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = " ";
    }
  }
  render() {
    return (
      <div>
        <p>This is the Link component!</p>

        <button onClick={this.onLogout.bind(this)}> back to login </button>
        <LinksList />
        <p>Add link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
