import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  ajax: Ember.inject.service(),

  model: function(params){
    var auctionId = params.auction_id;
    var deferred = this.getAuctionInfo(auctionId);
    deferred.then(function(data){
      console.log(data);
    });

    return;
  }


});
