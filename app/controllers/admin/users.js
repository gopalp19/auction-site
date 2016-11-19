import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  userAccounts: [],

  actions: {
    deleteUser: function(index){
      var self = this;

      var userData ={
        "username": this.get('userAccounts')[index].username
      };

      this.deleteUser(userData).then(function(response){
        if(response.isSuccessful){
          //good
          self.get('userAccounts').removeAt(index);

        }else{
          //bad
        }
      });
    }
  }

});
