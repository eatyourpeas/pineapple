import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Key_Contact_Add.onCreated(function bodyOnCreated() {

  Meteor.subscribe('key_contacts');

});

Template.Key_Contact_Add.events({
  'click .return_button': function(event, template){
      Router.go('key_contacts');
  },
  'submit #update_key_contact_form': function(event, template){
    event.preventDefault();

    var keyContactName = event.target.key_contact_name.value;
    var keyContactJob = event.target.key_contact_job.value;
    var keyContactAddress = event.target.key_contact_address.value;
    var keyContactOffice = event.target.key_contact_office.value;
    var keyContactMobile = event.target.key_contact_mobile.value;
    var keyContactEmail = event.target.key_contact_email.value;

    KeyContacts.insert({
      key_contact_user: Meteor.userId(),
      key_contact_name: keyContactName,
      key_contact_job: keyContactJob,
      key_contact_address: keyContactAddress,
      key_contact_office: keyContactOffice,
      key_contact_mobile: keyContactMobile,
      key_contact_email: keyContactEmail,
      key_contact_createdAt: new Date()
    });

    Router.go('menu');
  }
});
