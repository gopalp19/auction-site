import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.access_token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate: function(userId, password) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
     // make the request to authenticate the user at /authpath endpoint.
     Ember.$.ajax({
       url: '/users/log-in',
       type: 'POST',
       contentType : 'application/json',
       dataType : 'json',
       data: JSON.stringify({"userId": userId, "password": password}),
     }).then(function (response) {
         resolve({ access_token: response.token, user_id: response.userId }); //saving to the session.
     }, function (xhr, status, error) {
         reject(xhr.responseText);
     });
   });
  },
  invalidate: function(data) {
    return new Ember.RSVP.resolve(true); //does nothing for now, you should add code for this to work. (clear the session, send a logout to the server)
  }

});
