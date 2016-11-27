import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  auctions: [],

  cartTotal: "",

  session: Ember.inject.service(),

  actions: {
    checkoutAction: function(){
      var self = this;
      var user = this.get('session').get('data').authenticated.userData;

      var username = user.username;

      this.checkoutCart(username).then(function(response){
        if(response.isSuccessful){
            self.transitionToRoute('success').then(function(route){
              route.controller.set('message', "Auction Items have been checked out and you have been billed");
            });
        }else{

        }
      });
    }
  }
});
