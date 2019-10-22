const webpack =require('webpack')
const path = require('path')

module.exports = {  
  mode: 'development',
  entry: {
    react: ['react','react-dom']
  },
  output:{
    filename:'[name].js',
    library:'lld_[name]'
  },
  plugins:[
    new webpack.DllPlugin({
      name:'lld_[name]',
      path:path.resolve(__dirname,'dist','lld.json')
    })
  ]
}