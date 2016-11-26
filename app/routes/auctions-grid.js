import Ember from 'ember';
import serverReq from '../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  ajax: Ember.inject.service(),
  isSearching: false,


  model: function(param){
    var self = this;
    if(param) {
      console.log(param);
      self.controllerFor(self.routeName).set('isSearching',param.isSearching);
    }
    if(!(self.controllerFor(self.routeName).get("isSearching"))) {
      var deferred = this.getOpenAuctions();
      deferred.then(function (data) {
        self.controllerFor(self.routeName).set('auctions', data);
      });
    } else { console.log("we are searching");}
    return;
  }

});
