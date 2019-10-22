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
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: { "^/api": "" } // 将/api重写为""空字符串
            }
        }
    },
    output: {
        filename: 'js/index.[hash:6].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].min.js'
    },
    resolve: {
        modules: [
         'node_modules' // 首先在根目录下寻找
        ],
        extensions: ['.js', '.json','.css'], // 查找扩展名
        alias:{ 
            bootstrap: 'bootstrap/dist/css/bootstrap.css'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
          DEV:JSON.stringify('production')
        }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'lld.html',
            title: '兰利德-webapck',
            favicon: 'main.jpg',
            chunks: ['home']
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
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
