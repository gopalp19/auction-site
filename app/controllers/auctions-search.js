import Ember from 'ember';
import serverReq from '../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  errorMessage: "",
  predefinedItems: Ember.A(['Keyword', 'Item']),

  actions:{
    searchKeyword: function(){
      var self = this;
      var keywordString = this.get('keywordString');
      console.log("keyword auction search");
      self.set("errorMessage","");

      self.searchAuctionsByString(keywordString).then(function(response) {
        if(response) {
          self.transitionToRoute('search-grid').then(function(route){
            route.controller.set('headerText',"Search Results");
            route.controller.set('auctions',response);
          });
        }
        else {
          self.set("errorMessage","Search for " + keywordString + " returned 0 results!");
        }
      });
    }
  }
});
