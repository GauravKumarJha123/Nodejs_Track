// server/main.js
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/collections.js';

Meteor.startup(() => {
  // If the Tasks collection is empty, insert some data.
  if (Tasks.find().count() === 0) {
    Tasks.insert({ text: 'First Task' });
    Tasks.insert({ text: 'Second Task' });
    Tasks.insert({ text: 'Third Task' });
  }
});
