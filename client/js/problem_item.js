import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Problem_Item.onCreated(function(){
  this.active_problem = new ReactiveVar(true);
});

Template.Problem_Item.events({
  'click .return_button': function(event, template){
    Router.go('diagnosis');
  },
  'submit #update_problem_form': function(event, template){
    event.preventDefault();

    var problemName = event.target.problem_name.value;
    var problemStart = event.target.problem_start_date.value;
    var problemEnd = event.target.problem_end_date.value;

    Problems.update({_id: this._id},{
      problem_name: problemName,
      problem_start_date: problemStart,
      problem_end_date: problemEnd,
      problem_updatedAt: new Date()
    });

    Router.go('diagnosis');
  },
  'change #active_problem': function(event, template){
    console.log(event.currentTarget.checked);
    template.active_problem.set(event.currentTarget.checked);
  }
});

Template.Problem_Item.helpers({
  'visible': function(){
    if (Template.instance().active_problem.get()) {
      return 'end_date_hidden';
    } else {
      return 'end_date_visible';
    }
  }
});
