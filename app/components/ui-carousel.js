import Ember from 'ember';
import layout from 'cracker-house/templates/components/ui-carousel';

export default Ember.Component.extend({
	layout: layout,

	didInsertElement() {
		$(document).ready(function() {
			$('#owl-demo').owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 1500,
				autoplayHoverPause: true,
				loop: true,
				dots: false
			});
		});

		return this._super.apply(this, arguments);
	}
});
