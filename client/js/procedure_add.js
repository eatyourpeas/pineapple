import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Procedure_Add.onCreated(function bodyOnCreated() {
  Meteor.subscribe('procedures');
});

Template.Procedure_Add.events({
  'click .return_button':function(event, template){
    Router.go('diagnosis');
  },
  'submit #update_procedure_form': function(event, template){

    event.preventDefault();
    var procedureName = event.target.procedure_name.value;
    var procedureDate = event.target.procedure_date.value;

    console.log('called update procedure: '+ procedureName + ' '+ procedureDate);

    Procedures.insert({
      procedure_name: procedureName,
      procedure_date: procedureDate
    });

    console.log();

    Router.go('diagnosis');
  }
});
