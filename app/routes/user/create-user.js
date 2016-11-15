import Ember from 'ember';

export default Ember.Route.extend({

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {

      var userData = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        canBuy: false,
        canSell: false
      };
      
      controller.set('userData', userData);
      controller.set('errorMessage', "");
    }
  }
});
