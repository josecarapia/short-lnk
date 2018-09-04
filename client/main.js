import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

import { routes, onAuthChange } from "./../imports/routes/routes";
import { Linkss } from "../imports/api/links";
import "../imports/startup/simple-schema-configuration";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
});
