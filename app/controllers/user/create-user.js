import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  session: Ember.inject.service(),

  fullName: "",
  userId: "",
  userPassword: "",
  emailAddress: "",
  canBuy: false,
  canSell: false,

  errorMessage: "",

  actions: {

    submitUserForm: function(){
      var self = this;

      var newUser ={
        "username": this.get('userId'),
        "password": this.get('userPassword'),
        "firstName": this.get('fullName'),
        "lastName": "",
        "email": this.get('emailAddress'),
        "shipFrom": "",
        "shipTo": "",
        "billTo": "",
        "canBuy": this.get('canBuy'),
        "canSell": this.get('canSell')
      };

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
