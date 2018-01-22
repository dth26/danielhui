let webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var SRC_DIR = path.resolve(__dirname, 'src/js');

var config = {
	entry: { 
		app: SRC_DIR + '/entry.jsx'
	},
  	output: {
    	path: BUILD_DIR,
    	filename: 'bundle.js'
  	},
  	 module : {
	    loaders : [
	      {
	        test : /\.jsx?/,
	        include : SRC_DIR,
	        loaders: ['react-hot-loader/webpack', 'babel-loader']
	      }
	    ]
	},
	devServer: {
	    hotOnly: true,
	    contentBase: "./public"
	 },
	  plugins: [
	    // Enable the plugin to let webpack communicate changes
	    // to WDS. --hot sets this automatically!
	    new webpack.HotModuleReplacementPlugin()
  	]
}


module.exports = config;



