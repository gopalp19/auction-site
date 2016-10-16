import Ember from 'ember';

export default Ember.Controller.extend({

  userId: "",

  userPassword: "",

  actions: {

    logInHandler: function(){
      console.log("user info: " + this.userId + " " + this.userPassword);
    }

  }

});
