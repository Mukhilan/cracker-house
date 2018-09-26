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
					width: '170px',
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
					width: '600px',
					height: '450px'
				}
			}
		}
	}),

	carouselUiProps: computed('isMobileView', {
		get() {
			if(this.get('isMobileView')) {
				return {
					height: '300px'
				}
			} else {
				return {
					height: '450px'
				}
			}
		}
	})
});
