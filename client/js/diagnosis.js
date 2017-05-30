import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../templates/diagnosis.html';

Template.Diagnosis.onCreated(function bodyOnCreated() {
  Meteor.subscribe('diagnoses');
  Meteor.subscribe('problems');
  Meteor.subscribe('procedures');
});

Template.Diagnosis.helpers({
  'diagnoses': function(){
    return Diagnoses.find().fetch();
  },
  'thereAreNoDiagnoses': function(){
    if (Diagnoses.find().count() < 1) {
      return true;
    } else {
      return false;
    }
  },
  'problems': function(){
    return Problems.find().fetch();
  },
  'thereAreNoProblems': function(){
    if (Problems.find().count() < 1) {
      return true;
    } else {
      return false;
    }
  },
  'procedures': function(){
    return Procedures.find().fetch();
  },
  'thereAreNoProcedures': function(){
    if (Procedures.find().count() < 1) {
      return true;
    } else {
      return false;
    }
  }
});

Template.Diagnosis.events({
  'click #return_button':function(event, template){
    Router.go('menu');
  },
  'click #add_diagnosis_button': function(event, template){
    Router.go('/diagnosis_add');
  },
  'click #edit_diagnosis_button': function(event, template){
    Router.go('/diagnosis_item/'+this._id);
  },
  'click #delete_diagnosis_button': function(event, template){
    Diagnoses.remove({_id: this._id});
  },
  'click #add_problem_button': function(event, template){
    Router.go('/problem_add');
  },
  'click #edit_problem_button': function(event, template){
    Router.go('/problem_item/'+this._id);
  },
  'click #delete_problem_button': function(event, template){
    Problems.remove({_id: this._id});
  },
  'click #add_procedure_button': function(event, template){
    Router.go('/procedure_add');
  },
  'click #edit_procedure_button': function(event, template){
    Router.go('/procedure_item/'+this._id);
  },
  'click #delete_procedure_button': function(event, template){
    Procedures.remove({_id: this._id});
  }
});
