import Ember from 'ember';

export default Ember.Controller.extend({
	pdfFile: Ember.computed({
		get() {
			return window.location.hostname + '/dist/assets/cracker-list.pdf';
		}
	})
});