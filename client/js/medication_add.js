import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Medication_Add.onCreated(function bodyOnCreated() {

  Meteor.subscribe('medications');

});

Template.Medication_Add.events({
  'click .return_button': function(event, template){
      Router.go('medication');
  },
  'submit #update_medication_form': function(event, template){
    event.preventDefault();

    var medicineName = event.target.medication_name.value;
    var medicineFrequency = event.target.medication_frequency.value;
    var medicineStart = event.target.medication_date.value;

    console.log('hello '+ medicineName + ' ' + Meteor.userId());

    Medications.insert({
      medication_user: Meteor.userId(),
      medication_name: medicineName,
      medication_frequency: medicineFrequency,
      medication_date: medicineStart,
      medication_createdAt: new Date()
    });

    Router.go('medication');
  }
});
