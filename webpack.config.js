var webpack = require('webpack');
var path = require('path');
var config = {
    entry: ['webpack-dev-server/client?http://localhost:8080',
		    'webpack/hot/only-dev-server',
		    path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
	        loaders: [{
		        test: /\.js$/,
		        // loaders: ['react-hot', 'babel'],
		        loader:'babel',
		        // include: path.join(__dirname, 'app'),
		        exclude: /node_modules/,
		        query: {
		          //添加两个presents 使用这两种presets处理js或者jsx文件
		          presets: ['es2015', 'react']
		        }
		    },
		    {
			    test: /\.less$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
			}
	    ]
    },
    plugins: [
	    //new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
	]
};
module.exports = config; 
