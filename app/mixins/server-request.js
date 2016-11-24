import Ember from 'ember';

export default Ember.Mixin.create({

  ajax: Ember.inject.service(),

  submitNewUser: function(newUserInfo){
    var data = JSON.stringify(newUserInfo);
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/users/addUser', {
    //var deferred = this.get('ajax').request('http://localhost:8080/testRest/users/addUser', {
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
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions/addAuction', {

    //var deferred = this.get('ajax').request('http://localhost:8080/testRest/auctions/addAuction', {
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
    //var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions');
    var deferred = this.get('ajax').request('http://localhost:8080/testRest/auctions');
    return deferred;
  },

  getOpenAuctions: function(){
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions/getOpenAuctions');
    //var deferred = this.get('ajax').request('http://localhost:8080/testRest/auctions/getOpenAuctions');
    return deferred;
  },

  getAuctionItems: function(){
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions/getAuctionItems');
    //var deferred = this.get('ajax').request('http://localhost:8080/testRest/auctions/getAuctionItems');
    return deferred;
  },

  addAuctionItem: function(newAuctionItem){
    var data = JSON.stringify(newAuctionItem);
    //var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions/addAuctionItem', {

    var deferred = this.get('ajax').request('http://localhost:8080/testRest/auctions/addAuctionItem', {
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
    var requestURL = 'http://ec2-54-88-29-105.compute-1.amazonaws.com/users/' + username;
    //var requestURL = 'http://localhost:8080/testRest/users/' + username;

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
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/users/updateUser', {
    //var deferred = this.get('ajax').request('http://localhost:8080/testRest/users/updateUser', {
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
    var requestURL = 'http://ec2-54-88-29-105.compute-1.amazonaws.com/users';

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
    var requestURL = 'http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions/getCategories';
    //var requestURL = 'http://localhost:8080/testRest/auctions/getCategories';

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
    //var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/users/deleteUser', {
    var deferred = this.get('ajax').request('http://localhost:8080/testRest/users/deleteUser', {
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
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions/deleteCategory', {
    //var deferred = this.get('ajax').request('http://localhost:8080/testRest/auctions/deleteCategory', {
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
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions/getCreateAuctionData');
    //var deferred = this.get('ajax').request('http://localhost:8080/testRest/auctions/getCreateAuctionData');
    return deferred;
  },

  submitBid: function(bidData) {
    var data = JSON.stringify(bidData);
    console.log(data);
    //var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/bids/submitBid', {
    var deferred = this.get('ajax').request('http://localhost:8080/bids/submitBid', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
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
