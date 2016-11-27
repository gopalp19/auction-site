import Ember from 'ember';
import serverReq from '../mixins/server-request';

export default Ember.Controller.extend(serverReq,{

  //auctions: Ember.A([1, 2, 3, 4, 5, 6, 7]),
  auctions: Ember.A([]),
  errorMessage: "",
  searchString: "",
  headerText: "Open Auctions",
  queryParams: 'searchString',

});
