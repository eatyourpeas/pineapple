import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.Key_Contacts.onCreated(function bodyOnCreated() {

  Meteor.subscribe('key_contacts');

});

Template.Key_Contacts.helpers({
  'key_contacts': function(){
    return KeyContacts.find().fetch();
  },
  'thereAreNoKeyContacts': function(){
    if (KeyContacts.find().count()<1) {
      return true;
    } else {
      return false;
    }
  }
});

Template.Key_Contacts.events({
  'click .key_contacts_notification': function(event, template){
    console.log(this._id); //the id of the selected medication
  },
  'click #return_button': function(event, template){
    Router.go('menu');
  },
  'click #delete_record': function(event, template){
    console.log('delete ' + this._id);
    KeyContacts.remove(this._id);
  },
  'click .new_record': function(event, template){
    console.log('create new record');
    Router.go('key_contact_add');
  },
  'click #edit_record': function(event, template){
    console.log('edit this record: ');
    Router.go('/key_contact_item/'+this._id);
  }
})
