import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  session: Ember.inject.service(),

  auctionName: "",
  auctionDescription: "",
  auctionId: "",
  auctionSeller: "",
  auctionStartTime: "",
  auctionEndTime: "",
  auctionTags: [],
  auctionItem: "",
  auctionHasBid: "",
  highBidUser: "",
  highBidAmount: 0,
  submitBidResponse: "",
  loggedIn: false,
  errorMessage: "",

  startDate: new Date(),

  auction: {},
  bids: [],

  actions: {

    submitBid: function(){
      console.log("hihi\n");
      this.set("errorMessage","");
      this.set("submitBidResponse","");
      var self = this;
      var user = self.get('session').get('data').authenticated.userData;
      if(!user) {
        self.set("errorMessage","You must be logged in to bid.");
        return;
      }
      var newBid ={
        username: user.username,
        amount: self.get('newBidAmount')
      };
      var bidData ={
        bid: newBid,
        auctionId: parseInt(self.get("auctionId"),10)
      };

      self.submitBid(bidData).then(function(response){
        if(response.get("isSuccessful")) {
          self.send('renderSuccessTemplate');
        }
        else {
          self.send('renderFailureTemplate');
        }
      });
    },

    submitAuction(){
      var self = this;
      var user = self.get('session').get('data').authenticated.userData;

      var buyData ={
        username: user.username,
        auctionId: parseInt(self.get("auctionId"),10)
      };

      self.buyAuction(buyData).then(function(response){
        if(response.isSuccessful) {
          self.transitionToRoute('success').then(function(route){
            route.controller.set('message', "Congrats! Auction is bought, and is now in your cart");
          });
        }
        else {
          self.transitionToRoute('error');
        }
      });
    }
  }

});
