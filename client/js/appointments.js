import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Appointments.onCreated(function bodyOnCreated() {

  Meteor.subscribe('appointments');

});

Template.Appointments.helpers({
  'appointments': function(){
    return Appointments.find().fetch();
  },
  'thereAreNoAppointments': function(){
    if (Appointments.find().count()<1) {
      return true;
    } else {
      return false;
    }
  }
});

Template.Appointments.events({
  'click .appointment_notification': function(event, template){
    console.log(this._id); //the id of the selected medication
  },
  'click #return_button': function(event, template){
    Router.go('menu');
  },
  'click #delete_record': function(event, template){
    console.log('delete ' + this._id);
    Appointments.remove(this._id);
  },
  'click .new_record': function(event, template){
    console.log('create new record');
    Router.go('appointment_add');
  },
  'click #edit_record': function(event, template){
    console.log('edit this record: ');
    Router.go('/appointment_item/'+this._id);
  }
})
