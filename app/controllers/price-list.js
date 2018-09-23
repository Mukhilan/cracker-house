import Ember from 'ember';

export default Ember.Controller.extend({
	pdfFile: Ember.computed({
		get() {
			return 'http://mukhilan.github.io' + '/dist/assets/cracker-list.pdf';
		}
	})
});