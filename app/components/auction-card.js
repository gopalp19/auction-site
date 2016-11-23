import Ember from 'ember';

export default Ember.Component.extend({

  auctionTimeLeft: Ember.computed(function(){
    var auction = this.get('auction');

    var startDate = new Date();
    var endDate = new Date(auction.auctionEndTime);

    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;

    // Convert both dates to milliseconds
    var date1_ms = startDate.getTime();
    var date2_ms = endDate.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    //take out milliseconds
    difference_ms = difference_ms/1000;
    var seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms/60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms/60;
    var hours = Math.floor(difference_ms % 24);
    var days = Math.floor(difference_ms/24);

    return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
  }),

});
