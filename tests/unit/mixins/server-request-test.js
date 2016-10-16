import Ember from 'ember';
import ServerRequestMixin from 'auction-site/mixins/server-request';
import { module, test } from 'qunit';

module('Unit | Mixin | server request');

// Replace this with your real tests.
test('it works', function(assert) {
  let ServerRequestObject = Ember.Object.extend(ServerRequestMixin);
  let subject = ServerRequestObject.create();
  assert.ok(subject);
});
