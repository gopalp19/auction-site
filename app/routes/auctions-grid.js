import Ember from 'ember';
import serverReq from '../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  ajax: Ember.inject.service(),

  model: function(){
    var self = this;

    var deferred = this.getOpenAuctions();
    deferred.then(function(data){
      self.controllerFor(self.routeName).set('auctions', data);
    });

    return;
  }

});
