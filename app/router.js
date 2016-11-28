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
    this.route('create-user-successful');
    this.route('view-user');
    this.route('view-cart');
    this.route('view-other-user', { path: 'view-other-user/:username' });
  });

  this.route('auction', function() {
    this.route('view-auction', { path: 'view-auction/:auction_id' });
    this.route('create-auction');
  });

  this.route('auctions-grid');
  this.route('search-grid');
  this.route('error');

  this.route('admin', function() {
    this.route('users');
    this.route('categories');
    this.route('flagged-auctions');
  });
  this.route('auctions-search');
  this.route('success');
});

export default Router;
