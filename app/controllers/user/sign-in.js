import Ember from 'ember';

export default Ember.Controller.extend({

  userId: "",

  userPassword: "",

  session: Ember.inject.service(),

  store: Ember.inject.service(),

  actions: {

    logInHandler: function(){
      var self = this;
      console.log("user info: " + this.userId + " " + this.userPassword);

      //const { login, password } = this.getProperties('login', 'password');
      this.get('session').authenticate('authenticator:custom', this.userId, this.userPassword).then(function(data){
        self.get('store');
        console.log('Success! Click the top link!');
      }, function(err){
        console.log('Error obtaining token: ' + err.responseText);
      });
    },

    logOutHandler() {
      this.get('session').invalidate();
    }

  }

});
