import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Linkss = new Mongo.Collection("links");

if (Meteor.isServer) {
  Meteor.publish("links", function() {
    return Linkss.find({ userId: this.userId });
  });
}
