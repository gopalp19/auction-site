import Ember from 'ember';

export default Ember.Controller.extend({

  auctionEndDate: Ember.Object.create({
    date1: moment(),
    mindate: moment("2014-11-01"),
    maxdate: moment("2015-12-01"),
    disabled:true
  }),


});
