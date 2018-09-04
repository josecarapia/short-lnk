import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";

import "../imports/api/users";
import { Linkss } from "../imports/api/links";
import "../imports/startup/simple-schema-configuration";

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Linkss.findOne(_id);

    if (link) {
      res.statusCode = 302;
      res.setHeader("Location", link.url);
      res.end();
    } else {
      next();
    }
  });

  WebApp.connectHandlers.use((req, res, next) => {
    console.log("this is from my custom middleware!");
    next();
  });
});
