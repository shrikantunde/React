var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const BUILD_DIR = path.resolve(__dirname, 'dist/');
const APP_DIR = path.resolve(__dirname, './src/');

module.exports = function () {
    const isDev = process.env.NODE_ENV === 'development';

    let config = {
        entry: {
           main: "./src/index.tsx"
        },
        output: {
            path: path.join(__dirname, "dist"),
            publicPath: "/",
            filename: "app.[hash].js"
        },
        devtool: "eval-source-map",
        target: 'web',

        resolve: {
            extensions: ['.js', '.ts', '.tsx']
        },

        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    enforce: 'pre',
                    loader: 'tslint-loader',
                    options: { /* Loader options go here */ }
                },
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
                    publicPath: '/dist'
                })
                },
                {   test: /\.(jpe?g|png|gif|svg)$/i, 
                    loader: "file-loader?name=images/[name].[ext]"
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                DEV: isDev
            }),
            new webpack.ProvidePlugin({
            'Promise': 'bluebird'
        }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    tslint: {
                        emitErrors: true,
                        failOnHint: true
                    }
                }
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),

            new HtmlWebpackPlugin({
                title:'Phoenix POC',
                minify:{
                    collapseWhitespace:true
                },
                hash:true,
                template:'./index.html',
            }),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
            new ExtractTextPlugin({
                filename:'app.css',
                disable:true,
                allChunks:true
            })
        ]
    };

    if (isDev) {
        config.devServer = {
            publicPath: "/",
            hot: true,
            port: 3000,
            host: 'localhost',
            historyApiFallback: true,
            contentBase: './',
            open:true,
            compress:true,
            inline:true
        };
    }

    return config;
}
