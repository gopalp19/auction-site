import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  session: Ember.inject.service(),

  model: function(params){
    var self = this;
    this.getUser(params.username).then(function(response){
      self.controllerFor(self.routeName).set('userData', response);
      var pushedAuctions = {};
      var ids = {
        bidIds: Ember.A([])
      };
      var bidsObject = response.bids;
      bidsObject.forEach(function(item) {
        ids.bidIds.addObject(item.id);
      });
      if(ids.bidIds.length > 0) {
        self.getAuctionsForIds(ids).then(function(response) {
          var bidDataArr = Ember.A([]);
          for(var x in response) {
            if(!response.hasOwnProperty(x)) {
              continue;
            }
            var temp = {};
            temp['bidAuction'] = response[x];
            if(!pushedAuctions[temp.bidAuction.auctionId]) {
              bidDataArr.pushObject(temp);
              pushedAuctions[temp.bidAuction.auctionId] = true;
            }
          }
          self.controllerFor(self.routeName).set('bidData',bidDataArr);
        });
      }
    });
  },

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('updateLabel', "Update");
      controller.set('readonly', true);
    }
  }

});
