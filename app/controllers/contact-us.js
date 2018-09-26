import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Controller.extend({
	generalService: injectService('general-service'),
});
