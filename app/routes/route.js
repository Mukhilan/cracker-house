import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function () {
		window.scrollTo(0, 0);
		return this._super.apply(this, arguments);
	}
})