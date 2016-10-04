var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: [
        path.join(__dirname, 'src/main.js')
    ],

    output: {
        path: path.join(__dirname, 'build-production'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(
            {
                sourceMap: false,
                mangle: false,
                compress: {
                    warnings: false
                }
            }),
    ],


    module: {
        loaders: [{
            test: /(\.jsx$|\.js$)/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        },
            {test: /\.html|\.ico/, loader: 'file?name=[name].[ext]'}
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }

};
