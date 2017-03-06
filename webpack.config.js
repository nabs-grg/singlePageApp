var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname + '/src');

var config = {
	entry: SRC_DIR + '/index.js',
	output: {
		path: './public',
		filename: 'bundle.js'
	},
	module: {
		rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	    }
        ],
    },
	watch : true
};

module.exports = config;