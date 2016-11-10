/**
 * Created by Acer on 2016/11/10.
 */

var path = require('path')
var config = {
    entry: path.resolve(__dirname, './src/ManageSystem.js'),


    output: {
        path:path.resolve(__dirname,"bundle"),
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 7778
    },

    module: {
        loaders: [ {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            },

        },
            {
                test: /\.css$/,
                loader: 'style!css',
                include: __dirname,
            },
            {test: /\.(jpg|png|svg)$/, loader: "url?limit=8192"},
        ]
    }

}

module.exports = config;