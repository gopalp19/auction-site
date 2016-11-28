import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  session: Ember.inject.service(),

  errorMessage: "",

  userData:{
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    canBuy: false,
    canSell: false
  },

  actions: {

    submitUserForm: function(){
      var self = this;
      this.set('errorMessage', "");

      var userData = this.get('userData');
      //var shipFrom = userData.streetAddress + " " + userData.apartmentNumber + " " + userData.zipCode + " Chicago, IL United States";

      var newUser ={
        "username": userData.username,
        "password": userData.password,
        "firstName": userData.firstName,
        "lastName": userData.lastName,
        "email": userData.email,
        "shipFrom": userData.billTo,
        "shipTo": userData.billTo,
        "billTo": userData.billTo,
        "canBuy": userData.canBuy,
        "canSell": userData.canSell
      };

      if(!userData.canBuy && !userData.canSell){
        this.set('errorMessage', "Please select buy ability, or sell ability, or both.");
        return;
      }

      this.submitNewUser(newUser).then(function(response){
        if(response.isSuccessful){
          //self.transitionToRoute('user.create-user-successful');
          self.transitionToRoute('user.create-user-successful').then(function(route){
            route.controller.set('created', true);
          });

        }else{
          self.set('errorMessage', response.errorMessage);
        }

      });
    },

    logOutHandler() {
      this.get('session').invalidate();
    }

  }


});
