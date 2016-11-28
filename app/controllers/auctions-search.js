import Ember from 'ember';
import serverReq from '../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  errorMessage: "",
  predefinedItems: Ember.A(['Keyword', 'Item']),

  actions:{
    searchKeyword: function(){
      var self = this;
      var searchString = this.get('keywordString');
      console.log("keyword auction search");
      self.set("errorMessage","");
      console.log(self.get('selectedItem'));
      var searchType = self.get('selectedItem');
      if(searchType === "Keyword") {
        self.searchAuctionsByString(searchString).then(function(response) {
          if(response) {
            self.transitionToRoute('search-grid').then(function(route){
              route.controller.set('headerText',"Search Results");
              route.controller.set('auctions',response);
            });
          }
          else {
            self.set("errorMessage","Search for " + searchString + " returned 0 results!");
          }
        });
      }
      else {
        self.searchAuctionItemByString(searchString).then(function(response) {
          if(response) {
            self.transitionToRoute('search-grid').then(function(route) {
              route.controller.set('headerText',"Search Results");
              route.controller.set('auctions',response);
            });
          }
          else {
            self.set("errorMessage","Search for " + searchString + " returned 0 results!");
          }
        });
      }
    }
  }
});
