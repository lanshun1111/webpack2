// 写进来devServe
let { smart }  =require('webpack-merge')
let base = require('./webpack.base.js')


module.exports = smart(base,{
  mode: 'development',
  devServer: {
    port: '8083',
    contentBase: './dist',
    // proxy: {
    //     '/api': {
    //         target: 'http://localhost:3000',
    //         changeOrigin: true,
    //         pathRewrite: { "^/api": "" } // 将/api重写为""空字符串
    //     }
    // }
   },
   module:{
     noParse:/jquery/,
   }
})