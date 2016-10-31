import Ember from 'ember';

export default Ember.Controller.extend({

  userId: "",

  userPassword: "",

  session: Ember.inject.service(),

  store: Ember.inject.service(),

  isErrorsVisible: false,

  actions: {

    logInHandler: function(){
      var self = this;
      console.log("user info: " + this.userId + " " + this.userPassword);

      //const { login, password } = this.getProperties('login', 'password');
      this.get('session').authenticate('authenticator:custom', this.userId, this.userPassword).then(function(data){
        console.log('Logged in');
      }, function(err){
        console.log('Login failure');
        self.set('isErrorsVisible', true);
      });
    },

    logOutHandler() {
      this.get('session').invalidate();
    }

  }

});
