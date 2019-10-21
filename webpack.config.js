const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: { home: './main.js' },
    mode: 'development',
    devServer: {
        port: '8081',
        contentBase: './dist',
        proxy:{
            target:'http://localhost:3000',
        }
    },
    output: {
        filename: 'js/index.[hash:6].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].min.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'lld.html',
            title: '兰利德-webapck',
            favicon: 'main.jpg',
            chunks: ['home']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: '/assets/imgs',
                        limit: 20000
                    }
                }
            },
            // {
            //     test: require.resolve('jquery'),
            //     loader: 'expose-loader?$'
            // },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}