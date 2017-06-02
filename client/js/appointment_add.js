import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Appointment_Add.onCreated(function bodyOnCreated() {

  Meteor.subscribe('appointments');

});

Template.Appointment_Add.events({
  'click .return_button': function(event, template){
      Router.go('appointments');
  },
  'submit #update_appointment_form': function(event, template){
    event.preventDefault();

    var appointmentName = event.target.appointment_name.value;
    var appointmentClinician = event.target.appointment_clinician.value;
    var appointmentDate = event.target.appointment_date.value;
    var appointmentTime = event.target.appointment_time.value;

    Appointments.insert({
      appointment_user: Meteor.userId(),
      appointment_name: appointmentName,
      appointment_clinician: appointmentClinician,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
      appointment_createdAt: new Date()
    });

    Router.go('appointments');
  }
});
