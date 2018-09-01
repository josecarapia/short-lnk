import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router";
import { Tracker } from "meteor/tracker";
import createHistory from "history/createBrowserHistory";

import Signup from "./../imports/ui/Signup";
import Links from "./../imports/ui/Links";
import NotFound from "./../imports/ui/NotFound";
import Login from "./../imports/ui/Login";

const history = createHistory();
const unauthenticatedPages = ["/", "/signup"];
const authenticatedPages = ["/links"];
let isUnauthenticatedPage = true;
let isAuthenticatedPage = false;

const onEnterPublicPage = Component => {
  if (Meteor.userId()) {
    return <Redirect to="/links" />;
  } else {
    return <Component />;
  }
};
const onEnterPrivatePage = Component => {
  if (!Meteor.userId()) {
    return <Redirect to="/" />;
  } else {
    return <Component />;
  }
};
const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => onEnterPublicPage(Login)} />
      <Route path="/signup" render={() => onEnterPublicPage(Signup)} />
      <Route path="/links" render={() => onEnterPrivatePage(Links)} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  console.log("pathname: ", history.location.pathname);
  if (isUnauthenticatedPage && isAuthenticated) {
    history.push("/links");
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.push("/");
  }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
});
