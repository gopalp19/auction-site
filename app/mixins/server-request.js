import Ember from 'ember';

export default Ember.Mixin.create({

  //baseURL: "http://ec2-54-88-29-105.compute-1.amazonaws.com/",
  baseURL: "http://localhost:8080/testRest/",

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
    var deferred = this.get('ajax').request('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      headers: {
                'Access-Control-Allow-Origin': '*',
                //'Access-Control-Request-Method': 'GET',
                //'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    });
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
    //var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions/searchAuctions/'+searchString, {
    var deferred = this.get('ajax').request('http://localhost:8080/auctions/searchAuctions/'+searchString, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return deferred;
  }


});
