import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  userData: {},
  subscriptionData: Ember.A([]),

  readonly: true,
  specialReadonly: true,

  updateLabel: "Update",

  session: Ember.inject.service(),

  actions:{
    updateUser: function(){
      var self = this;

      if(this.get('updateLabel') == "Update"){
        this.set('updateLabel', "Save");
        this.set('readonly', false);
      }else{
        var updatedUser = this.get('userData');
        this.updateCurrentUser(updatedUser).then(function(response){

          self.transitionToRoute('user.create-user-successful').then(function(route){
            route.controller.set('updated', true);
          });

        });
      }
    },

    unsubscribeFromItem: function(item,index) {
      var self = this;
      console.log("item " + item + " index: " + index);
      var data = {
        userName: self.userData.username
      }
      self.unsubscribeUserFromItem(data,item.id).then(function(response) {
        if(response.isSuccessful) {
          self.subscriptionData.removeAt(index);
        }else {
          self.transitiontoRoute('failure').then(function(route) {
            route.controller.set('message',"Failed to unsubscribe from item");
          });
        }
      });
    },

    deleteUser: function(){
      var self = this;

      var user = this.get('session').get('data').authenticated.userData;

      var userData ={
        "username": user.username
      };

      this.deleteUser(userData).then(function(response){

        if(response.isSuccessful){
            self.get('session').invalidate();
            self.transitionToRoute('success').then(function(route){
              route.controller.set('message', "User Account has been succesfully deleted");
            });
        }else{

        }
      });
    }
  }

});
