import Ember from 'ember';

export default Ember.Controller.extend({

  userId: "",

  userPassword: "",

  session: Ember.inject.service(),

  store: Ember.inject.service(),

  errorMessage: "",

  actions: {

    logInHandler: function(){
      var self = this;
      console.log("user info: " + this.userId + " " + this.userPassword);
      this.set('errorMessage', "");

      //const { login, password } = this.getProperties('login', 'password');
      this.get('session').authenticate('authenticator:custom', this.userId, this.userPassword).then(function(data){
        console.log('Logged in');
      }, function(err){
        var response = JSON.parse(err);
        console.log('Login failure');
        self.set('errorMessage', response.errorMessage);
      });
    },

    logOutHandler() {
      this.get('session').invalidate();
    }

  }

});
