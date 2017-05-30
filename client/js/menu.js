import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/menu.html';

Template.Menu.events({
  'click #top-left': function(event, template){
    event.preventDefault();
    Router.go('diagnosis');
  },
  'click #top-right': function(event, template){
    event.preventDefault();
    Router.go('medication');
  },
  'click #mid-right': function(event, template){
    event.preventDefault();
    Router.go('results');
  },
  'click #mid-right': function(event, template){
    event.preventDefault();
    Router.go('emergency_protocol');
  },
  'click #low-left': function(event, template){
    event.preventDefault();
    Router.go('key_contacts');
  },
  'click #low-right': function(event, template){
    event.preventDefault();
    Router.go('appointments');
  }
});
