import Ember from 'ember';

export default Ember.Component.extend({

  nonEditable: Ember.computed('readonly', function() {
    if(readonly){
      return false;
    }
    return readonly;
  }),


});
