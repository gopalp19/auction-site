import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  model: function(){
    var self = this;

    this.getFlaggedAuctions().then(function(response){
      self.controllerFor(self.routeName).set('auctions', response.flaggedAuctions);
    });

  },

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('auctions', []);
    }
  }

});
