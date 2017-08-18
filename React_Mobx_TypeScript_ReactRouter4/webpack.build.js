var path = require("path");
var webpack = require("webpack");
var precss = require("precss");
var autoprefixer = require("autoprefixer");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "./",
        filename: '[name].[hash].js'
    },
    devtool: 'cheap-module-source-map',
    target: 'web',

    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },

    module: {
        rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader:['style-loader','css-loader'],
                    publicPath: '/dist/'
                })
                },
                {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=images/[name].[ext]"},
                // {
                //     test: /\.(gif|png|jpe?g|svg)$/i,
                //     loaders: [
                //     'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                //     'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65},gifsicle: {interlaced: false},optipng: {optimizationLevel: 4}}'
                //     ]
                // }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.ProvidePlugin({
            'Promise': 'bluebird'
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new HtmlWebpackPlugin({
        title:'Phoenix POC',
        minify:{
            collapseWhitespace:true
        },
        hash:true,
        template:'./index.html',
    }),
    
    new ExtractTextPlugin({
                filename:'/styles/app.css',
                disable:true,
                allChunks:true
            })
    ]
};