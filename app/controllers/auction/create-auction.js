import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  session: Ember.inject.service(),

  auctionName: "",
  auctionDescription: "",
  auctionQuantity: "",

  itemName: "",
  itemDescription: "",
  itemAddMessage: "",

  auctionStartTime: "",
  auctionEndTime: "",
  minDate: "",
  endMinDate: "",

  //predefinedItems: Ember.A(['Laptop', 'TV', 'Printer']),
  predefinedItems: Ember.A([]),
  //predefinedTags: Ember.A(['Furniture', 'Kitchen', 'Outdoor']),
  predefinedTags: Ember.A([]),

  selectedTags: [],
  selectedItem: "",
  addItemEnabled: false,

  canBuy: false,
  buyNowPrice: "",

  updateItemsList: function(){
    var self = this;

    this.getAuctionItems().then(function(response){
      self.get('predefinedItems').clear();
      self.get('predefinedItems').pushObjects(response);
    });
  },

  actions:{

    tagCreate: function(newTag){
      this.get('predefinedTags').pushObject(newTag);
      this.get('selectedTags').pushObject(newTag);
    },

    startTimeSelected: function(startDate){
      console.log('test');
      this.set('endMinDate', startDate.format("MM/DD/YYYY h:mm A"));
      this.set('auctionStartTime', startDate);
    },

    endTimeSelected: function(endDate){
      this.set('auctionEndTime', endDate);
    },

    addNewItem: function(){
      this.set('addItemEnabled', true);
    },

    saveNewItem: function(){
      var self = this;

      var newAuctionItem ={
        "title": this.get('itemName'),
        "description": this.get('itemDescription')
      };

      this.addAuctionItem(newAuctionItem).then(function(response){
        if(response.isSuccessful){
          console.log("success");
          self.set("itemAddMessage", response.responseMessage);
          self.set("itemName", "");
          self.set("itemDescription", "");

          self.updateItemsList();
        }else{
          self.set("itemAddMessage", response.responseMessage);
        }
      });
    },

    submitNewAuction: function(){
      var self = this;
      var user = this.get('session').get('data').authenticated.userData;

      if(!this.get('canBuy')){
        Ember.set(this, 'buyNowPrice', "");
      }

      var newAuction ={
        "auctionName": this.get('auctionName'),
        "auctionDescription": this.get('auctionDescription'),
        "auctionStartTime": this.get('auctionStartTime').toDate(),
        "auctionEndTime": this.get('auctionEndTime').toDate(),
        "seller": user.username,
        "auctionBuyNow": this.get('canBuy'),
        "auctionBuyNowPrice": this.get('buyNowPrice'),
        "auctionItemId": this.get('selectedItem').id,
        "quantity": this.get('auctionQuantity')
      };

      var auctionData = {
        "auction": newAuction,
        "selectedCategories": this.get('selectedTags'),
      };

      this.submitNewAuction(auctionData).then(function(response){
        self.send('renderSuccessTemplate');
      });
    }

  }

});
