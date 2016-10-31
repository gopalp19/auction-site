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

  actions: {

    submitUserForm: function(data){
      var self = this;

      var newUser ={
        "fullName": this.get('fullName'),
        "userId": this.get('userId'),
        "userPassword": this.get('userPassword'),
        "emailAddress": this.get('emailAddress'),
        "canBuy": this.get('canBuy'),
        "canSell": this.get('canSell')
      }

      this.submitNewUser(newUser).then(function(response){
        if(response.isSuccessful){
          self.transitionToRoute('user.create-user-successful');
        }else{

        }

      });
    },

    logOutHandler() {
      this.get('session').invalidate();
    }

  }


});
