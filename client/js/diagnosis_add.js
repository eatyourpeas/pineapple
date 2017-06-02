import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Diagnosis_Add.onCreated(function(){
  this.active_problem = new ReactiveVar(true);
});

Template.Diagnosis_Add.events({
  'click .return_button': function(event, template){
    Router.go('diagnosis');
  },
  'submit #update_diagnosis_form': function(event, template){
    event.preventDefault();

    var diagnosisName = event.target.diagnosis_name.value;
    var diagnosisStart = event.target.diagnosis_start_date.value;
    var diagnosisEnd = event.target.diagnosis_end_date.value;

    Diagnoses.insert({
      diagnosis_user: Meteor.userId(),
      diagnosis_name: diagnosisName,
      diagnosis_start_date: diagnosisStart,
      diagnosis_end_date: diagnosisEnd,
      diagnosis_createdAt: new Date()
    });

    Router.go('diagnosis');
  },
  'change #active_problem': function(event, template){
    console.log(event.currentTarget.checked);
    template.active_problem.set(event.currentTarget.checked);
  }
});

Template.Diagnosis_Add.helpers({
  'visible': function(){
    if (Template.instance().active_problem.get()) {
      return 'end_date_hidden';
    } else {
      return 'end_date_visible';
    }
  }
});
