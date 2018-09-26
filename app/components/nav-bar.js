import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Component.extend({
	generalService: injectService('general-service'),

	didRender() {
		this.get('generalService').checkAndSetMobileView();
	},

	$stackableMenu: Ember.computed({
		get() {
			return this.$('.ui.blue.stackable');
		}
	}),

	actions: {
		toggleMenu(show = true) {
			if(show) {
				this.get('$stackableMenu').addClass('active')
			} else {
				this.get('$stackableMenu').removeClass('active')
			}
		}
	}
});
