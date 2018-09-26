import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Controller.extend({
	generalService: injectService('general-service'),

	crackerCategories: [{
		name: 'GARLANDS',
		items: [{
			name: '100 wala lar',
			imageURL: 'assets/images/garlands/garland-1.jpg',
			meta: "1 pcs/box",
			price: "Rs. 87"
		},{
			name: '1000 wala lar',
			imageURL: 'assets/images/garlands/garland-2.jpg',
			meta: "1 pcs/box",
			price: "Rs. 750"
		},{
			name: '2000 wala lar',
			imageURL: 'assets/images/garlands/garland-3.jpg',
			meta: "1 pcs/box",
			price: "Rs. 1500"
		},{
			name: '5000 wala lar',
			imageURL: 'assets/images/garlands/garland-4.jpg',
			meta: "1 pcs/box",
			price: "Rs. 3600"
		},{
			name: '10000 wala lar',
			imageURL: 'assets/images/garlands/garland-5.jpg',
			meta: "10 pcs/box",
			price: "Rs. 7200"
		},{
			name: 'Loose crackers',
			imageURL: 'assets/images/garlands/garland-6.jpg',
			meta: "100 pieces/packet",
			price: "Rs. 300"
		},{
			name: 'Turkey cracker',
			imageURL: 'assets/images/garlands/garland-7.jpg',
			meta: "25 pcs",
			price: "Rs. 250"
		}]
	}, {
		name: 'DELUXE CRACKERS',
		items: [{
			name: '28 jungle king',
			imageURL: 'assets/images/deluxe/deluxe-1.jpg',
			meta: "10 pcs/box",
			price: "Rs. 730"
		},{
			name: '24 don deluxe',
			imageURL: 'assets/images/deluxe/deluxe-2.jpg',
			meta: "10 pcs/box",
			price: "Rs. 790"
		}, {
			name: '28 jaipur palace',
			imageURL: 'assets/images/deluxe/deluxe-3.jpg',
			meta: "10 pcs/box",
			price: "Rs. 850"
		},{
			name: '50 tiny tom',
			imageURL: 'assets/images/deluxe/deluxe-4.jpg',
			meta: "10 pcs/box",
			price: "Rs. 970"
		}, {
			name: '40 sea king',
			imageURL: 'assets/images/deluxe/deluxe-5.jpg',
			meta: "10 pcs/box",
			price: "Rs. 1340"
		}, {
			name: '28 star war',
			imageURL: 'assets/images/deluxe/deluxe-6.jpg',
			meta: "5 pcs/box",
			price: "Rs. 760"
		}, {
			name: '50 jai bharath',
			imageURL: 'assets/images/deluxe/deluxe-7.jpg',
			meta: "10 pcs/box",
			price: "Rs. 1580"
		}, {
			name: 'Kango king',
			imageURL: 'assets/images/deluxe/deluxe-3.jpg',
			meta: "5 pcs/box",
			price: "Rs. 930"
		}, {
			name: 'Deluxe 50 lar',
			imageURL: 'assets/images/deluxe/deluxe-4.jpg',
			meta: "1 pcs/box",
			price: "Rs. 160"
		}]
	}, {
		name: 'FLOWER POTS',
		items: [{
			name: 'Flower pots ashoka',
			imageURL: 'assets/images/flower-pots/pot-asoka.jpg',
			meta: "10 pcs/box",
			price: "Rs. 140 per box"
		}, {
			name: 'Flower Pots Super Giant',
			imageURL: 'assets/images/flower-pots/pot-gaint.jpg',
			meta: "10 pcs/box",
			price: "Rs. 240 per box"
		}, {
			name: 'Colour Pinjore Deluxe',
			imageURL: 'assets/images/flower-pots/color-pinjore.jpg',
			meta: "10 pcs/box",
			price: "Rs. 280 per box"
		},{
			name: 'Happy planet-anar',
			imageURL: 'assets/images/flower-pots/planet-anar.gif',
			meta: "2 pcs/box",
			price: "Rs. 250 per box"
		}]
	}, {
		name: 'CHAKKARS',
		items: [{
			name: 'Zamin Chakkar Asoka',
			imageURL: 'assets/images/chakkras/chakkar-1.jpg',
			meta: "10 pcs/box",
			price: "Rs. 60 per box"
		},{
			name: 'Zamin Chakkar Deluxe',
			imageURL: 'assets/images/chakkras/chakkar-2.jpg',
			meta: "10 pcs/box",
			price: "Rs. 170 per box"
		},{
			name: 'Zamin Chakkar Special',
			imageURL: 'assets/images/chakkras/chakkar-3.jpg',
			meta: "10 pcs/box",
			price: "Rs. 100 per box"
		}]
	}, {
		name: 'BOMBS',
		items: [{
			name: 'Hydro bomb',
			imageURL: 'assets/images/bombs/bomb-1.jpg',
			meta: "10 pcs/box",
			price: "Rs. 100 per box"
		},{
			name: 'Mini bullet bomb',
			imageURL: 'assets/images/bombs/bomb-2.jpg',
			meta: "10 pcs/box",
			price: "Rs. 170 per box"
		},{
			name: 'Super bullet',
			imageURL: 'assets/images/bombs/bomb-3.jpg',
			meta: "10 pcs/box",
			price: "Rs. 70 per box"
		},{
			name: '555 time bomb',
			imageURL: 'assets/images/bombs/bomb-4.jpg',
			meta: "10 pcs/box",
			price: "Rs. 70 per box"
		}]
	}, {
		name: 'ROCKETS',
		items: [{
			name: 'Rocket',
			imageURL: 'assets/images/rockets/rocket-1.jpg',
			meta: "10 pcs/box",
			price: "Rs. 110 per box"
		},{
			name: '2 sound rocket',
			imageURL: 'assets/images/rockets/rocket-2.jpg',
			meta: "10 pcs/box",
			price: "Rs. 212 per box"
		},{
			name: '3 sound rocket',
			imageURL: 'assets/images/rockets/rocket-3.jpg',
			meta: "10 pcs/box",
			price: "Rs. 233 per box"
		},{
			name: 'Navarang rocket',
			imageURL: 'assets/images/rockets/rocket-4.jpg',
			meta: "10 pcs/box",
			price: "Rs. 259 per box"
		},{
			name: 'Challenger (Whistling)',
			imageURL: 'assets/images/rockets/rocket-2.jpg',
			meta: "10 pcs/box",
			price: "Rs. 259 per box"
		},{
			name: 'Nesha (Whistling)',
			imageURL: 'assets/images/rockets/rocket-5.jpg',
			meta: "10 pcs/box",
			price: "Rs. 482 per box"
		}]
	}, {
		name: 'CHINESE CRACKERS',
		items: [{
			name: '12 Tukkada',
			imageURL: 'assets/images/chinese/chinese-2.jpg',
			meta: "10 pcs/box",
			price: "Rs. 75 per box"
		},{
			name: '28 motta single Tukkada',
			imageURL: 'assets/images/chinese/chinese-1.jpg',
			meta: "10 pcs/box",
			price: "Rs. 200 per box"
		}]
	}, {
		name: 'BIJILI CRACKERS',
		items: [{
			name: 'Red bijili 50',
			imageURL: 'assets/images/bijili/bijili-1.jpg',
			meta: "10 bags",
			price: "Rs. 275"
		},{
			name: 'Red bijili 100',
			imageURL: 'assets/images/bijili/bijili-1.jpg',
			meta: "10 bags",
			price: "Rs. 570"
		}, {
			name: 'Stripped bijili 50',
			imageURL: 'assets/images/bijili/bijili-2.jpg',
			meta: "10 bags",
			price: "Rs. 320"
		},{
			name: 'Stripped bijili 100',
			imageURL: 'assets/images/bijili/bijili-3.jpg',
			meta: "10 bags",
			price: "Rs. 600"
		}]
	}, {
		name: 'CHORSA',
		items: [{
			name: '28 Chorsa crackers',
			imageURL: 'assets/images/chorsa/chorsa-1.jpg',
			meta: "10 pcs/box",
			price: "Rs. 210"
		},{
			name: '28 Gaint crackers',
			imageURL: 'assets/images/chorsa/chorsa-2.jpg',
			meta: "10 pcs/box",
			price: "Rs. 400"
		}, {
			name: '56 Gaint crackers',
			imageURL: 'assets/images/chorsa/chorsa-3.jpg',
			meta: "10 pcs/box",
			price: "Rs. 750"
		}]
	}, {
		name: 'TWINKLING STAR',
		items: [{
			name: '2 twinkling star',
			imageURL: 'assets/images/twinkling/twinkling-1.jpg',
			meta: "10 pcs/box",
			price: "Rs. 45"
		},{
			name: '4 twinkling star',
			imageURL: 'assets/images/twinkling/twinkling-2.jpg',
			meta: "10 pcs/box",
			price: "Rs. 120"
		}, {
			name: 'Dil Dil',
			imageURL: 'assets/images/twinkling/twinkling-3.jpg',
			meta: "10 pcs/box",
			price: "Rs. 50"
		}]
	}],

	selectedCategory: 'all',

	actions: {
		onCategoryChange(selectedCategory) {
			this.set('selectedCategory', selectedCategory)
		}
	}
});
