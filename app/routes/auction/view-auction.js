import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  session: Ember.inject.service(),

  model: function(params){
    var signedIn = this.get('session').get('isAuthenticated');
    var self = this;
    var auctionId = params.auction_id;
    if(signedIn) {
      self.controllerFor(self.routeName).set("loggedIn",true);
    }

    self.getAuctionInfo(auctionId).then(function(data){
      console.log(data);
      self.controllerFor(self.routeName).set("auctionDescription",data.auctionDescription);
      self.controllerFor(self.routeName).set("auctionName",data.auctionName);
      self.controllerFor(self.routeName).set("auctionSeller",data.seller);
      self.controllerFor(self.routeName).set("auctionId",auctionId);
      if(data.highBidId) {
        var bidDeferred = self.getBidInfo(data.highBidId);
        bidDeferred.then(function(data) {
          self.controllerFor(self.routeName).set("highBidUser",data.username);
          self.controllerFor(self.routeName).set("highBidAmount",data.amount);
          self.controllerFor(self.routeName).set("auctionHasBid",true);
        });
      } else {
        self.controllerFor(self.routeName).set("highBidUser","No Bids");
        self.controllerFor(self.routeName).set("highBidAmount","0");
      }
    });
    return;
  },

  actions: {
    renderSuccessTemplate: function() {
      var self = this;
      self.controllerFor(self.routeName).set("submitBidResponse","Bid Successful!");
      self.render('auction.view-auction-bid-success');
    },
    renderFailureTemplate: function() {
      var self = this;
      self.controllerFor(self.routeName).set("submitBidResponse","Bid Failed!");
      self.render('auction.view-auction-bid-failure');
    }
  }

});
