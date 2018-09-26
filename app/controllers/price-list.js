import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Controller.extend({
	generalService: injectService('general-service'),

	selectedPriceType: Ember.computed('priceListTypes', {
		get() {
			return this.get('priceListTypes.firstObject');
		},

		set(key, value) {
			return value
		}
	}),

	priceListTypes: [{
			title: 'Coronation fireworks',
			images: [
				'assets/images/coronation/1.jpg',
				'assets/images/coronation/2.jpg'
			]
		}, {
			title: 'Ayyan crackers',
			images: [
				'assets/images/ayyan/1.jpg',
				'assets/images/ayyan/2.jpg',
				'assets/images/ayyan/3.jpg',
				'assets/images/ayyan/4.jpg'
			]
		}, {
			title: 'Krishna Ajantha',
			images: [
				'assets/images/krishna/1.jpg',
				'assets/images/krishna/2.jpg',
				'assets/images/krishna/3.jpg',
				'assets/images/krishna/4.jpg'
			]
		}
	],

	actions: {
		selectPriceType(selectedPriceType) {
			this.set('selectedPriceType', selectedPriceType);
		}
	}
});