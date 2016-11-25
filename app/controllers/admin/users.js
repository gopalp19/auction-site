import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  userAccounts: [],

  errorMessage: "",

  actions: {
    deleteUser: function(index){
      var self = this;
      this.set('errorMessage', "");

      var userData ={
        "username": this.get('userAccounts')[index].username
      };

      this.deleteUser(userData).then(function(response){
        if(response.isSuccessful){
          self.get('userAccounts').removeAt(index);
        }else{
          self.set('errorMessage', response.errorMessage);
        }
      });
    }
  }

});
