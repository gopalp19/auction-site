import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  session: Ember.inject.service(),

  model: function(params){
    var self = this;

    var user = this.get('session').get('data').authenticated.userData;

    this.getAuctionsInCart(user.username).then(function(response){
      self.controllerFor(self.routeName).get('auctions').pushObjects(response.auctions);
      self.controllerFor(self.routeName).set('cartTotal', response.cartTotal);
    });

  },

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('auctions', []);
      controller.set('cartTotal', "");
    }
  }

});
