import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Service.extend({
	checkAndSetMobileView: function () {
		this.set('isMobileView', this._isMobileView());
	},

	isMobileView: false,

	_isMobileView() {
		return window.matchMedia('screen and (max-width: 767px) and (min-width: 320px)').matches;
	},

	crackerCardUiProps: computed('isMobileView', {
		get() {
			if(this.get('isMobileView')) {
				return {
					width: '160px',
					height: '150px'
				}
			} else {
				return {
					width: '270px',
					height: '250px'
				}
			}
		}
	}),

	mapUiProps: computed('isMobileView', {
		get() {
			if(this.get('isMobileView')) {
				return {
					width: '350px',
					height: '300px'
				}
			} else {
				return {
					width: '700px',
					height: '550px'
				}
			}
		}
	}),

	carouselUiProps: computed('isMobileView', {
		get() {
			if(this.get('isMobileView')) {
				return {
					height: '280px'
				}
			} else {
				return {
					height: '450px'
				}
			}
		}
	}),

	priceTypeImageUiProps: computed('isMobileView', {
		get() {
			if(this.get('isMobileView')) {
				return {
					width: '400px',
					height: '700px'
				}
			} else {
				return {
					width: '1200px',
					height: '1200px'
				}
			}
		}
	}),
});
