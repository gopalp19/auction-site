import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  session: Ember.inject.service(),

  model: function(params){
    var self = this;

    var user = this.get('session').get('data').authenticated.userData;

    this.getUser(user.username).then(function(response){
      console.log("test");
      self.controllerFor(self.routeName).set('userData', response);
    });

  },

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('updateLabel', "Update");
      controller.set('readonly', true);
    }
  }

});
