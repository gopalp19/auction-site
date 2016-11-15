import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  userData: {},

  readonly: true,
  specialReadonly: true,

  updateLabel: "Update",

  actions:{
    updateUser: function(){
      if(this.get('updateLabel') == "Update"){
        this.set('updateLabel', "Save");
        this.set('readonly', false);
      }else{
        var updatedUser = this.get('userData');
        this.updateCurrentUser(updatedUser);
      }
    }
  }

});
