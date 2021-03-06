import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('register');
  this.route('login');
  this.route('dashboard', function () {
    this.route('add-time', { path: '/item/:item_id/new-time' });
    this.route('item', { path: '/items' }, function () {
      this.route('new');
    });
  });
});
export default Router;
