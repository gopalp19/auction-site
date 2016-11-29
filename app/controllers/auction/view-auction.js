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
  predefinedTags: [],

  startDate: new Date(),

  auction: {},
  bids: [],

  auctionCanBeStopped: Ember.computed('auctionSeller', function(){
    var signedIn = this.get('session').get('isAuthenticated');
    if(signedIn){
        var user = this.get('session').get('data').authenticated.userData;
        if(user.isAdmin){
          //All admins can delete all auctions
          return true;
        }else{
          if(!Ember.isEmpty(this.get("auctionSeller")) && user.username == this.get("auctionSeller")){
            //Then this user is owner of auction and can remove it
            return true;
          }
        }
    }

    return false;
  }),

  actions: {

    submitBid: function () {

      this.set("errorMessage", "");
      this.set("submitBidResponse", "");
      var self = this;
      var user = self.get('session').get('data').authenticated.userData;
      if (!user) {
        self.set("errorMessage", "You must be logged in to bid.");
        return;
      }
      if(!user.canBuy) {
        self.set("errorMessage","You do not have the entitlement to bid on auctions");
        return;
      }
      if(user.username === this.get("auctionSeller")) {
        self.set("errorMessage","You cannot bid on your own auction!");
        return;
      }

      var newBid = {
        username: user.username,
        amount: self.get('newBidAmount')
      };
      var bidData = {
        bid: newBid,
        auctionId: parseInt(self.get("auctionId"), 10)
      };

      self.submitBid(bidData).then(function (response) {
        if (response.isSuccessful) {
          //self.send('renderSuccessTemplate');
          self.transitionToRoute('success').then(function (route) {
            route.controller.set('message', "Congrats! Auction bid has been placed!");
          });
        } else {
          self.set("errorMessage", "Bid Failed!");
        }
      });
    },

    buyAuctionAction(){
      this.set("errorMessage","");
      this.set("submitBidResponse","");
      var self = this;
      var user = self.get('session').get('data').authenticated.userData;

      if(!user.canBuy) {
        self.set("errorMessage","You do not have the entitlement to bid on auctions");
        return;
      }
      if(user.username === this.get("auctionSeller")) {
        self.set("errorMessage","You cannot bid on your own auction!");
        return;
      }

      var buyData ={
        username: user.username,
        auctionId: parseInt(self.get("auctionId"), 10)
      };

      self.buyAuction(buyData).then(function (response) {
        if (response.isSuccessful) {
          self.transitionToRoute('success').then(function (route) {
            route.controller.set('message', "Congrats! Auction is bought, and is now in your cart");
          });
        }
        else {
          self.transitionToRoute('error');
        }
      });
    },

    stopAuctionAction: function () {
      var self = this;
      var user = self.get('session').get('data').authenticated.userData;
      this.set("errorMessage", "");

      var data = {
        username: user.username,
        auctionId: parseInt(self.get("auctionId"), 10),
        isAdmin: user.isAdmin
      };


      self.stopAuction(data).then(function (response) {
        if (response.isSuccessful) {
          self.transitionToRoute('success').then(function (route) {
            route.controller.set('message', "Congrats! Auction has been stopped");
          });
        }
        else {
          self.set("errorMessage", response.responseMessage);
        }
      });
    },

    flagAuctionAction: function () {
      var self = this;
      this.set("errorMessage", "");

      var data = {
        auctionId: parseInt(self.get("auctionId"), 10),
      };

      self.flagAuction(data).then(function (response) {
        if (response.isSuccessful) {
          self.transitionToRoute('success').then(function (route) {
            route.controller.set('message', "Success! Auction has been flagged");
          });
        }
        else {
          self.set("errorMessage", response.responseMessage);
        }
      });
    },


    followItem: function () {
      var self = this;
      var user = self.get('session').get('data').authenticated.userData;
      var auction = self.get('auction');
      if (!user) {
        self.set("errorMessage", "You must be logged in to subscribe to items.");
        return;
      }
      console.log("username: " + user.username + " itemName: " + auction.itemName);
      var data = {
        itemName: auction.itemName,
        userName: user.username
      };
      self.subscribeUserToItem(data).then(function (response) {
        if (response.isSuccessful) {
          self.transitionToRoute('success').then(function (route) {
            route.controller.set('message', "You have been subscribed to " + auction.itemName);
          });
        } else {
          self.set('errorMessage', response.responseMessage);
        }
      });
    }
  }

});
