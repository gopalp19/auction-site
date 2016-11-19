import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service(),

  userIsAdmin: Ember.computed(function(){
    var signedIn = this.get('session').get('isAuthenticated');
    if(signedIn){
        var user = this.get('session').get('data').authenticated.userData;
        if(user.canSell){
          return true;
        }
    }

    return false;
  })

});
