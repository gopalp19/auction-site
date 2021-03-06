import Ember from 'ember';

export default Ember.Mixin.create({

  baseURL: "http://ec2-54-88-29-105.compute-1.amazonaws.com/",
  //baseURL: "http://localhost:8080/testRest/",

  ajax: Ember.inject.service(),

  submitNewUser: function(newUserInfo){
    var data = JSON.stringify(newUserInfo);
    var deferred = this.get('ajax').request(this.get('baseURL') + 'users/addUser', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: data
    });
    return deferred;
  },

  submitNewAuction: function(newAuctionData){
    var data = JSON.stringify(newAuctionData);
    var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/addAuction', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: data
    });
    return deferred;
  },

  getAuctionInfo: function(auctionId){
    var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/' + auctionId);
    return deferred;
  },

  getAuctions: function(){
    var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions');
    return deferred;
  },

  getOpenAuctions: function(){
    var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/getOpenAuctions');
    return deferred;
  },

  getAuctionItems: function(){
    var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/getAuctionItems');
    return deferred;
  },

  addAuctionItem: function(newAuctionItem){
    var data = JSON.stringify(newAuctionItem);
    var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/addAuctionItem', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: data
    });
    return deferred;
  },

  getUser: function(username){
    var requestURL = this.get('baseURL') + 'users/' + username;

    var deferred = this.get('ajax').request(requestURL, {
        method: 'GET',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    });
    return deferred;
  },

  updateCurrentUser: function(updatedUserData){
    var data = JSON.stringify(updatedUserData);
    var deferred = this.get('ajax').request(this.get('baseURL') + 'users/updateUser', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: data
    });
    return deferred;
  },

  getAllUsers: function(){
    var requestURL = this.get('baseURL') + 'users';

    var deferred = this.get('ajax').request(requestURL, {
        method: 'GET',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    });
    return deferred;
  },

  getCategories: function(){
    var requestURL = this.get('baseURL') + 'auctions/getCategories';

    var deferred = this.get('ajax').request(requestURL, {
        method: 'GET',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    });
    return deferred;
  },

  deleteUser: function(userData){
    var data = JSON.stringify(userData);
    var deferred = this.get('ajax').request(this.get('baseURL') + 'users/deleteUser', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: data
    });
    return deferred;
  },

  deleteCategory: function(category){
    var data = JSON.stringify(category);
    var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/deleteCategory', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: data
    });
    return deferred;
  },

  getCreateAuctionData: function(){
    var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/getCreateAuctionData');
    return deferred;
  },

  submitBid: function(bidData) {
    var data = JSON.stringify(bidData);
    console.log(data);
    var deferred = this.get('ajax').request(this.get('baseURL') + 'bids/submitBid', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data

    });
    return deferred;
  },

  getAuctionsInCart: function(username){
    var requestURL = this.get('baseURL') + 'auctions/getAuctionsInCart/' + username;

    var deferred = this.get('ajax').request(requestURL, {
        method: 'GET',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    });
    return deferred;
  },

  searchAuctionsByString: function(searchString){
    var requestURL = this.get('baseURL') + 'auctions/searchAuctions/' + searchString;
    var deferred = this.get('ajax').request(requestURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return deferred;
  },

  buyAuction: function(buyData){
      var data = JSON.stringify(buyData);
      var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/buyAuction', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: data
      });
      return deferred;
  },

  getBidInfo: function(bidId){
    var deferred = this.get('ajax').request(this.get('baseURL') + 'bids/' + bidId);
    return deferred;
  },

  checkoutCart: function(username){
      var requestURL = this.get('baseURL') + 'users/checkoutCart/' + username;

      var deferred = this.get('ajax').request(requestURL, {
          method: 'GET',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      });
      return deferred;
  },

  getAuctionsForIds: function(ids) {
    var data = JSON.stringify(ids);
    var requestURL = this.get('baseURL') + 'auctions/batchFind';
    var deferred = this.get('ajax').request(requestURL, {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    });
    return deferred;
  },

  stopAuction: function(stopData){
      var data = JSON.stringify(stopData);
      var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/stopAuction', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: data
      });
      return deferred;
  },

  flagAuction: function(flagData){
      var data = JSON.stringify(flagData);
      var deferred = this.get('ajax').request(this.get('baseURL') + 'auctions/flagAuction', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: data
      });
      return deferred;
  },

  getFlaggedAuctions: function(){
    var requestURL = this.get('baseURL') + 'auctions/getFlaggedAuctions';

    var deferred = this.get('ajax').request(requestURL, {
        method: 'GET',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    });
    return deferred;
  },

  searchAuctionItemByString: function(searchString) {
    var requestURL = this.get('baseURL') + 'auctions/searchAuctionItems/' + searchString;
    var deferred = this.get('ajax').request(requestURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return deferred;
  },

  subscribeUserToItem: function(subscriptionData) {
    var data = JSON.stringify(subscriptionData);
    var requestURL = this.get('baseURL') + 'users/subscribe';
    var deferred = this.get('ajax').request(requestURL, {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    });
    return deferred;
  },

  getSubscriptions: function(username) {
    var requestURL = this.get('baseURL') + 'users/getSubscriptions/' + username;
    var deferred = this.get('ajax').request(requestURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return deferred;
  },

  unsubscribeUserFromItem: function(subData,itemId) {
    var data = JSON.stringify(subData);
    var requestURL = this.get('baseURL') + 'users/unsubscribe/' + itemId;
    var deferred = this.get('ajax').request(requestURL, {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    });
    return deferred;
  }


});
