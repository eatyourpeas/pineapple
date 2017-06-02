import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.Activation.onCreated(function(){
  this.overSixteen = new ReactiveVar(true);
  this.parentalConsent = new ReactiveVar(false);
});

Template.Activation.events({
  'change #d_o_b':function(event, template){
    var d_o_b = new Date(event.currentTarget.value);
    var today = new Date();

    var age =  Math.floor((today - d_o_b) / (1000 * 60 * 60 * 24 * 365.25));
    if (age < 16) {
      template.overSixteen.set(false);
    } else {
      template.overSixteen.set(true);
    }
  },
  'submit #activation_form': function(event, template){
    event.preventDefault();

    var activation_code = event.target.activation_code.value;
    var name = event.target.name.value;
    var nhs_number = event.target.nhs_number.value;
    var parental_consent = event.target.parental_consent.value;

    if (!Template.instance().overSixteen.get() && !Template.instance().parentalConsent.get()) {
      //you have not ticked the box
      sweetAlert('If you are under sixteen please acknowledge that you have your carers\' consent for this');
      return;
    }

    ///NEED TO TEST FOR VALID NHS NUMBER
    //NEED TO TEST FOR VALID CLINICIAN_KEY


    const combined_key = nhs_number + "-" + activation_code;
    Accounts.createUser({username: nhs_number, password: combined_key}, function(error, newUser){
      if (error) {
        if (error.error == 400) {
          sweetAlert('You missed out some stuff');
        } else {
          sweetAlert(error.reason);
        }
        return;
      } else {
        if (Template.instance().overSixteen.get()) {
          Roles.addUsersToRoles(newUser._id, "YOUNG_PERSON_ACCOUNT");
        } else {
          Roles.addUsersToRoles(newUser._id, "PARENT_CONSENT_ACCOUNT");
        }
        sweetAlert('Great,'+name+'! You are now registered.');
        //store this fact locally so if becomes logged out will still skip this step in future
        Router.go('menu');
      }
    });
  },
  'change #parental_consent': function(event, template){
    console.log(event.currentTarget.checked);
    template.parentalConsent.set(event.currentTarget.checked);
  }
});

Template.Activation.helpers ({
    'visible': function(){
      if (Template.instance().overSixteen.get()) {
        return 'end_date_hidden';
      } else {
        return 'end_date_visible';
      }
    }
});
