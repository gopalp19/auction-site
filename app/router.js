import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {
    this.route('create-user');
    this.route('sign-in');
  });

  this.route('auction', function() {
    this.route('view-auction', { path: 'view-auction/:auction_id' });
  });

});

export default Router;
