import Ember from 'ember';
import serverReq from '../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  ajax: Ember.inject.service(),

  model: function(){
    var self = this;

    //var auctionId = params.auction_id;
    var deferred = this.getOpenAuctions();
    deferred.then(function(data){
      //self.controller;
      //self.controller(auctions);
      self.controllerFor(self.routeName).set('auctions', data);
    });

    return;
  }

});
