import Ember from 'ember';

export default Ember.Mixin.create({

  ajax: Ember.inject.service(),

  submitNewUser: function(newUserInfo){
    var data = JSON.stringify(newUserInfo);
    //var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/users/addUser', {
    var deferred = this.get('ajax').request('http://localhost:8080/testRest/users/addUser', {
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
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions');
    //var deferred = this.get('ajax').request('http://localhost:8080/testRest/auctions');
    return deferred;
  },

  getAuctionItems: function(){
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions/getAuctionItems');
    //var deferred = this.get('ajax').request('http://localhost:8080/testRest/auctions/getAuctionItems');
    return deferred;
  },

  getUser: function(username){
    //var requestURL = 'http://ec2-54-88-29-105.compute-1.amazonaws.com/users/' + username;
    var requestURL = 'http://localhost:8080/testRest/users/' + username;

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
    //var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/users/addUser', {
    var deferred = this.get('ajax').request('http://localhost:8080/testRest/users/updateUser', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: data
    });
    return deferred;
  }


});
