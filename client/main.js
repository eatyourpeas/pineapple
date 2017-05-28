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

Router.route('/diagnosis', function () {
  this.render('Diagnosis');
});

Meteor.subscribe('medications');
console.log(Medications.find().fetch());
