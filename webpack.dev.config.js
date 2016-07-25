var webpack = require('webpack');
var path = require('path');

module.exports = {

    devtool: 'eval-source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'app/main.js')
    ],

    output: {
        path: path.join(__dirname, 'build-dev'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [{
            test: /(\.jsx$|\.js$)/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'app'),
            exclude: /node_modules/
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    devServer: {
        contentBase: './build-dev',
        colors: true,
        historyApiFallback: true,
        hot : true,
        port: 8080
    }


};
