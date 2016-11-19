import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  auctionCategories: [],

  actions: {
    deleteCategory: function(index){
      var self = this;

      var category ={
        "categoryName": this.get('auctionCategories')[index].categoryName
      };

      this.deleteCategory(category).then(function(response){
        if(response.isSuccessful){
          //good
          self.get('auctionCategories').removeAt(index);

        }else{
          //bad
        }
      });
    }
  }

});
