import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {
      path: '/',
      resetNamespace: true
  });
  this.route('cracker-list');
  this.route('contact-us');
  this.route('price-list');
});

export default Router;
