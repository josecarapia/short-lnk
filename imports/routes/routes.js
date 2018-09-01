import React from "react";
import { Meteor } from "meteor/meteor";
import { Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router";
import createHistory from "history/createBrowserHistory";

import Signup from "./../ui/Signup";
import Links from "./../ui/Links";
import NotFound from "./../ui/NotFound";
import Login from "./../ui/Login";

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

export const onAuthChange = isAuthenticated => {
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.push("/links");
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.push("/");
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => onEnterPublicPage(Login)} />
      <Route path="/signup" render={() => onEnterPublicPage(Signup)} />
      <Route path="/links" render={() => onEnterPrivatePage(Links)} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
