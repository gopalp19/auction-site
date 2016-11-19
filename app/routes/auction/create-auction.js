import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Route.extend(serverReq, {

  session: Ember.inject.service(),

  model: function(params){
    var self = this;

    var signedIn = this.get('session').get('isAuthenticated');
    if(!signedIn){
      this.transitionTo('error').then(function(route){
        console.log('test');
        route.controller.set('errorReason', "User not signed in!");
      });
    }else{
      var user = this.get('session').get('data').authenticated.userData;
      if(!user.canSell){
        this.transitionTo('error').then(function(route){
          console.log('test');
          route.controller.set('errorReason', "User not entitled to sell auctions!");
        });
      }
    }

    this.getCreateAuctionData().then(function(response){
      self.controllerFor(self.routeName).get('predefinedItems').pushObjects(response.auctionItems);
      self.controllerFor(self.routeName).get('predefinedTags').pushObjects(response.categoryList);
    });

    this.controllerFor(this.routeName).set('minDate', moment().format("MM/DD/YYYY h:mm a"));
    //this.controllerFor(this.routeName).set('minDate', moment().format("MM/d/YYYY h:mm a"));
  },

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('selectedTags', []);
      controller.set('selectedItem', "");
      controller.set('addItemEnabled', false);

      controller.set('auctionStartTime', "");
      controller.set('auctionEndTime', "");
      controller.set('minDate', "");
      controller.set('endMinDate', "");

      controller.set('auctionName', "");
      controller.set('auctionDescription', "");
    }
  },

  actions:{
    renderSuccessTemplate: function(){
      this.render('auction.create-auction-success');
    }
  }

});
