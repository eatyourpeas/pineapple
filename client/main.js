import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../databases.js';

import './main.html';

Router.route('/', function () {
  this.render('Intro');
});

Router.route('/disclaimer', function () {
  this.render('Disclaimer');
});

Router.route('/activation', function () {
  this.render('Activation');
});

Router.route('/menu', function () {
  this.render('Menu');
});

Router.route('/medication', function () {
  this.render('Medication');
});

Router.route('/medication_item/:_id',{
    template: 'Medication_Item',
    data: function() {
      return Medications.findOne({_id: this.params._id});
    }
    //  return Medications.findOne(this.params._id);

});

Router.route('/medication_add', function(){
  this.render('Medication_Add');
});

Router.route('/diagnosis', function () {
  this.render('Diagnosis');
});

Router.route('/diagnosis_add', function () {
  this.render('Diagnosis_Add');
});

Router.route('/diagnosis_item/:_id',{
    template: 'Diagnosis_Item',
    data: function() {
      return Diagnoses.findOne({_id: this.params._id});
    }
});

Router.route('/problem_add', function () {
  this.render('Problem_Add');
});

Router.route('/problem_item/:_id',{
    template: 'Problem_Item',
    data: function() {
      return Problems.findOne({_id: this.params._id});
    }
});

Router.route('/procedure_add', function () {
  this.render('Procedure_Add');
});

Router.route('/procedure_item/:_id',{
    template: 'Procedure_Item',
    data: function() {
      return Procedures.findOne({_id: this.params._id});
    }
});

Router.route('/results', function () {
  this.render('Results');
});

Router.route('/emergency', function () {
  this.render('Emergency');
});

Router.route('/contacts', function () {
  this.render('Contacts');
});

Router.route('/appointments', function () {
  this.render('Appointments');
});

Router.route('/appointment_add', function () {
  this.render('Appointment_Add');
});

Router.route('/appointment_item/:_id', {
  template: 'Appointment_Item',
  data: function() {
    return Appointments.findOne({_id: this.params._id});
  }
});

Meteor.subscribe('medications');
console.log(Medications.find().fetch());



//  Steph Rees, Chris Dalgety, Jill Parish, Yasmin Boudiaf, Philip Bailey, Simon Chapman

//  light green: 66b96a
//  dark green: 429f46
//  light orange: f7a724
//  mid orange lighter: f37e16
//  mid orange darker: ed6c00
//  dark orange: e55000
//  dark text: 353535

//https://www.iconexperience.com/g_collection/icons/?icon=pineapple
