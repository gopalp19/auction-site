import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  userData: {},

  readonly: true,
  specialReadonly: true,

  updateLabel: "Update",

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
    }
  }

});
