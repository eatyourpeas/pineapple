import { Meteor } from 'meteor/meteor';
import '../databases.js';


Meteor.startup(() => {
  // code to run on server at startup




  Meteor.publish('medications', function medicationPublication(){
    return Medications.find();
  });

  Meteor.publish('procedures', function medicationPublication(){
    return Procedures.find();
  });

  Meteor.publish('diagnoses', function diagnosesPublication(){
    return Diagnoses.find();
  });

  Meteor.publish('problems', function problemsPublication(){
    return Problems.find();
  });

  Meteor.publish('appointments', function appointmentsPublication(){
    return Appointments.find();
  });

});
