import Ember from 'ember';
import layout from 'cracker-house/templates/components/ui-carousel';
import injectService from 'ember-service/inject';

export default Ember.Component.extend({
	layout: layout,

	generalService: injectService('general-service'),

	didInsertElement() {
		$(document).ready(function() {
			$('#owl-demo').owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 2500,
				autoplayHoverPause: true,
				loop: true,
				dots: false
			});
		});

		return this._super.apply(this, arguments);
	}
});
