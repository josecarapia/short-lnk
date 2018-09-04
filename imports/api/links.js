import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import shortid from "shortid";

export const Linkss = new Mongo.Collection("links");

if (Meteor.isServer) {
  Meteor.publish("links", function() {
    return Linkss.find({ userId: this.userId });
  });
}

Meteor.methods({
  "links.insert"(url) {
    if (!this.userId) {
      throw new Meteor.Error("not-authourized");
    }

    new SimpleSchema({
      url: {
        type: String,
        label: "Your link",
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url });

    Linkss.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId
    });
  }
});
