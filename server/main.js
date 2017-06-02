import { Meteor } from 'meteor/meteor';
import '../databases.js';
import { Random } from 'meteor/random'
import { Accounts } from 'meteor/accounts-base'
const bcrypt = require('bcrypt');


Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('medications', function medicationPublication(){
    return Medications.find({medication_user: this.userId});
  });

  Meteor.publish('procedures', function medicationPublication(){
    return Procedures.find({procedure_user: this.userId});
  });

  Meteor.publish('diagnoses', function diagnosesPublication(){
    return Diagnoses.find({diagnosis_user: this.userId});
  });

  Meteor.publish('problems', function problemsPublication(){
    return Problems.find({problem_user: this.userId});
  });

  Meteor.publish('appointments', function appointmentsPublication(){
    return Appointments.find({appointment_user: this.userId});
  });


});

Meteor.methods({
  'generate_clinician_key'(){
    return Random.id();

  }
});
