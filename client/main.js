import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { BrowserRouter, Route } from "react-router-dom";
import { browserHistory, Switch } from "react-router";

import Signup from "./../imports/ui/Signup";
import Links from "./../imports/ui/Links";
import NotFound from "./../imports/ui/NotFound";
import Login from "./../imports/ui/Login";

//window.browserHistory = browserHistory;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/links" component={Links} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
});
