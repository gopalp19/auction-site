import Ember from 'ember';

export default Ember.Mixin.create({

  ajax: Ember.inject.service(),

  submitNewUser: function(newUserInfo){
    var deferred = this.get('ajax').request('http://localhost:4200/addNewUser', {
        method: 'POST',
        data: {
          "newUserInfo": newUserInfo
        }
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
    var deferred = this.get('ajax').request('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions', {
      //method: 'GET',
      /*headers: {
                'Access-Control-Allow-Origin': '*',
                //'Access-Control-Request-Method': 'GET',
                //'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }*/
    });
    return deferred;
  }


});
