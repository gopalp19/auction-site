import Ember from 'ember';

export default Ember.Mixin.create({

  ajax: Ember.inject.service(),

  getAuctionInfo: function(auctionId){
    var deferred = this.get('ajax').request('https://jsonplaceholder.typicode.com/posts/1');
    return deferred;
  }


});
