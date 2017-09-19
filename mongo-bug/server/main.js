import { Meteor } from 'meteor/meteor';
Elements = new Mongo.Collection("elements");

Meteor.startup(() => {
  Elements.insert({_id: '1UniqIdForMyTest', title: 'first', _items: [{value: 'started', type: '%'}] });
  // code to run on server at startup
});
