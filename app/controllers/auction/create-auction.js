import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  session: Ember.inject.service(),

  auctionName: "",
  auctionDescription: "",

  auctionStartTime: "",
  auctionEndTime: "",
  minDate: "",
  endMinDate: "",

  //predefinedItems: Ember.A(['Laptop', 'TV', 'Printer']),
  predefinedItems: Ember.A([]),
  predefinedTags: Ember.A(['Furniture', 'Kitchen', 'Outdoor']),

  selectedTags: [],
  selectedItem: "",
  addItemEnabled: false,

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

    submitNewAuction: function(){
      var self = this;
      var user = this.get('session').get('data').authenticated.userData;

      var newAuction ={
        "auctionName": this.get('auctionName'),
        "auctionDescription": this.get('auctionDescription'),
        "auctionStartTime": this.get('auctionStartTime').toDate(),
        "auctionEndTime": this.get('auctionEndTime').toDate(),
        "seller": user.username,
        "auctionBuyNow": false, //TODO: remove hardcoding
        "auctionItemId": this.get('selectedItem').id,
      };

      this.submitNewAuction(newAuction).then(function(response){
        self.send('renderSuccessTemplate');
      });
    }

  }

});
