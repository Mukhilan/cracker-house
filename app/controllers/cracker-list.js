import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Controller.extend({
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
	}],

	selectedCategory: 'all',

	actions: {
		onCategoryChange(selectedCategory) {
			this.set('selectedCategory', selectedCategory)
		}
	}
});
