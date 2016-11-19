import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  model: function(){
    var self = this;

    this.getAllUsers().then(function(response){
      self.controllerFor(self.routeName).set('userAccounts', response);
    });

  },

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('userAccounts', []);
    }
  }

});
