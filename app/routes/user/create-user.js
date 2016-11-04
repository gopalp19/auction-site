import Ember from 'ember';

export default Ember.Route.extend({

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('fullName', "");
      controller.set('userId', "");
      controller.set('userPassword', "");
      controller.set('emailAddress', "");
      controller.set('canBuy', false);
      controller.set('canSell', false);
      controller.set('errorMessage', "");
    }
  }
});
