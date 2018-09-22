var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
	  lessOptions: {
		  paths: [
			  'bower_components/semantic-ui'
		  ]
	  },

	  SemanticUI: {
		  css: true,
		  javascript: true,
		  fonts: true
	  }
  });

  importDependencies(app);
  return app.toTree();
};

function importDependencies(app) {
	app.import({
		development: app.bowerDirectory + '/owl.carousel/dist/owl.carousel.js',
		production: app.bowerDirectory + '/owl.carousel/dist/owl.carousel.min.js'
	});

	app.import({
		development: app.bowerDirectory + '/owl.carousel/dist/assets/owl.carousel.css',
		production: app.bowerDirectory + '/owl.carousel/dist/assets/owl.carousel.min.css'
	});
}
