import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Problem_Add.onCreated(function(){
  this.active_problem = new ReactiveVar(true);
});

Template.Problem_Add.events({
  'click #return_button':function(event, template){
    Router.go('diagnosis');
  },
  'submit #update_problem_form': function(event, template){
    event.preventDefault();
    var problemName = event.target.problem_name.value;
    var problemStartDate = event.target.problem_start_date.value;
    var problemEndDate = event.target.problem_end_date.value;

    if (problemEndDate < problemStartDate) {
      return;
    }

    Problems.insert({
      problem_user: Meteor.userId(),
      problem_name: problemName,
      problem_start_date: problemStartDate,
      problem_end_date: problemEndDate,
      problem_createdAt: new Date()
    });

    Router.go('diagnosis');
  },
  'change #active_problem': function(event, template){
    console.log(event.currentTarget.checked);
    template.active_problem.set(event.currentTarget.checked);
  }
});

Template.Problem_Add.helpers({
  'visible': function(){
    if (Template.instance().active_problem.get()) {
      return 'end_date_hidden';
    } else {
      return 'end_date_visible';
    }
  }
});
