import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  session: Ember.inject.service(),

  firstName: "",
  lastName: "",
  userId: "",
  userPassword: "",
  emailAddress: "",
  canBuy: false,
  canSell: false,

  errorMessage: "",

  actions: {

    submitUserForm: function(){
      var self = this;
      this.set('errorMessage', "");

      var newUser ={
        "username": this.get('userId'),
        "password": this.get('userPassword'),
        "firstName": this.get('firstName'),
        "lastName": this.get('lastName'),
        "email": this.get('emailAddress'),
        "shipFrom": "",
        "shipTo": "",
        "billTo": "",
        "canBuy": this.get('canBuy'),
        "canSell": this.get('canSell')
      };

      if(!this.get('canBuy') && !this.get('canSell')){
        this.set('errorMessage', "Please select buy ability, or sell ability, or both.");
        return;
      }

      this.submitNewUser(newUser).then(function(response){
        if(response.isSuccessful){
          self.transitionToRoute('user.create-user-successful');
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
