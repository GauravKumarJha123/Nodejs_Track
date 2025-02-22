// client/main.js
import { Template } from 'meteor/templating';
import { Tasks } from '../imports/collections.js';

import './main.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

Template.body.events({
    'submit .new-task'(event) {
      event.preventDefault();
  
      const target = event.target;
      const text = target.text.value;
  
      Tasks.insert({
        text,
        createdAt: new Date(),
      });
  
      target.text.value = '';
    },
  });
