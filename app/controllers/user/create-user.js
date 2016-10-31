import Ember from 'ember';

export default Ember.Controller.extend({

  fullName: "",
  userId: "",
  userPassword: "",
  emailAddress: "",
  canBuy: false,
  canSell: false,

  actions: {

    submitUserForm: function(data){
      console.log("user data");
    }

  }


});
