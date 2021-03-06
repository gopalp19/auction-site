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
      Ember.$.ajax({
        url: 'http://ec2-54-88-29-105.compute-1.amazonaws.com/users/login',
        //url: 'http://localhost:8080/testRest/users/login',
        type: 'POST',
        contentType : 'application/json',
        dataType : 'json',
        data: JSON.stringify({"username": userId, "password": password}),
      }).then(function (response) {
        resolve({ access_token: response.token, userData: response });
      }, function (xhr, status, error) {
        reject(xhr.responseText);
      });
    });
  },

  invalidate: function(data) {
    window.location.reload(true);
    return new Ember.RSVP.resolve(true);
  }

});
