import Ember from 'ember';
import serverReq from '../../mixins/server-request';

export default Ember.Controller.extend(serverReq, {

  userData: {},
  bidData: Ember.A([]),

  readonly: true,
  specialReadonly: true,

  updateLabel: "Update",

  session: Ember.inject.service(),

  actions: {
  }

});
