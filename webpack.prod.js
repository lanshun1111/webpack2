//  优化项

let { smart }  =require('webpack-merge')
let base = require('./webpack.base.js')
const webpack =require('webpack')

module.exports = smart(base,{
  mode: 'production'
})