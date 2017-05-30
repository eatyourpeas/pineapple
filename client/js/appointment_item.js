import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Appointment_Item.events({
  'click .return_button': function(event, template){
      Router.go('appointments');
  },
  'submit #update_appointment_form': function(event, template){
    event.preventDefault();

    var appointmentName = event.target.appointment_name.value;
    var appointmentClinician = event.target.appointment_clinician.value;
    var appointmentDate = event.target.appointment_date.value;
    var appointmentTime = event.target.appointment_time.value;

    Appointments.update({_id: this._id},{
      appointment_name: appointmentName,
      appointment_clinician: appointmentClinician,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
      appointment_updatedAt: new Date()
    });

    Router.go('appointments');
  }

});
