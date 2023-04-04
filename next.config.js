const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var webpack = require('webpack');
module.exports = {
	    plugins: [

		    			new webpack.DefinePlugin({
									  'process.env': {
										  					'NODE_ENV': JSON.stringify('production')
										  				}
									}),

		    			new UglifyJsPlugin({
										uglifyOptions: {
																output: {comments: false,beautify: false},
																compress: true,
																warnings: false
															}
									}),
		    			new CompressionPlugin({
									  asset: "[path].gz[query]",
									  algorithm: "gzip",
									  test: /\.js$|\.css$|\.html$/,
									  threshold: 10240,
									  minRatio: 0.8
									}),

		    			new SWPrecacheWebpackPlugin({
									  cacheId: 'next-ss',
									  filename: 'sw.js',
									  minify: true,
									  staticFileGlobsIgnorePatterns: [ /\.next\// ],
									  staticFileGlobs: [
										  				'static/**/*',
										  			  ],
									  runtimeCaching: [
										  				{
																			  handler: 'networkFirst',
																			  urlPattern: /^https?.*/,
																			},
										  			  ],
									})

		       ],
	  	webpack: function (cfg) {
			    const originalEntry = cfg.entry
			    cfg.entry = async () => {
				          const entries = await originalEntry()
				    			entries['main.js'].unshift('./client/polyfills.js')
				          return entries
				        }

			    return cfg
				}
};

