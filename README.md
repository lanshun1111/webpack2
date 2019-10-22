# webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。 --来自官网

# webpack可以看做是模块打包机：分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。 -- 基本工能

# 安装本地的webpack4 为了防止版本不一样（全局安装webpack webpack-cli 可以使用webpack-cli init  就像vue-cli的脚手架一样 快速生成一个webpack的默认脚手架） 

# npm init - y 首先初始化文件

# npm install webpack webapck-cli -D  本地依赖 webpack-cli和webpack4配套的 

# 此时webpack 的建立是0配置的（不是没有配置） 有一些基本的默认配置

# 建立一个inedx.js 默认webpack的初始化文件 

# 运行npx webpack // npx 是内置命令  webpack-cli 中可以config-yargs 看到

# 查看打包成功的 webpack的生成的默认bundle.js 文件 可以看一下



# 建立一个webpack.config.js   （名字可以修改）可以运行为 npx webpack --config [name](webpack.config.copy.js)

# 可以在packag.json scripts(脚本中) 打包配置

# npm install webpack-dev-server(我们常用 npm run dev/serve) 开发依赖 在webpack中可以设置 服务的配置

--quiet: //控制台中不输出打包的信息，开发中一般设置为false，进行 打印，这样查看错误比较方面
--no-info: // 不显示任何信息
--colors: //对信息进行颜色输出
--no-colors: //对信息不进行颜色输出
--compress:  //开启gzip压缩
--host <hostname/ip>: //设置ip
--port <number>: //设置端口号，默认是:8080
--inline: //webpack-dev-server会在你的webpack.config.js的入口配置文件中再添加一个入口,
--hot: //开发热替换
--open: //启动命令，自动打开浏览器
--history-api-fallback: //查看历史url
# 配置es6 转换为 es5
--npm install babel-loader @babel/core @babel/preset-env -D  // 添加babel文件
      test: /\.js$/,
      use: {
      loader: 'babel-loader',
      options: {
      presets:['@babel/preset-env']
#  将引进的的模块做为全局变量例如jQ
--npm install jquery -s expose-loader
--  import $ from 'expose-loader?$!jquery'  //  expose-loader 内联配置 
 {
   test: require.resolve('jquery'), webpack rules:[]中配置
   loader: 'expose-loader?$'
 }         
    new webpack.ProvidePlugin({ 每个模块通过注入的方式
    })
    externals: { // cdn 需要在主文件中引入cdn 可以压缩文件
      jquery: '$'
   }

  # 前端项目中除了html、css、js，不可避免地要处理图片文件，webpack打包图片文件是通过file-loader、url-loader处理的。
url-loader可以将指定大小及以下的图片文件转成base64写入js，避免额外请求图片资源，如果超过指定大小再使用file-loader打包图片文件。

    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
              'file-loader'
            ]

        }
     test: /\.(png|svg|jpg|gif)$/,
     use: {
     loader: 'url-loader',
     options: {
     outputPath: 'assets/imgs',
     limit: 20000
      }
   }
  }, 
  # 分类文件 
  # 在文件
  # outputPath: 'assets/imgs'
  
  # 删除dist目录来 插件 webpack-clean-plugin
    这个可以实施打包时删除dist
  # watch 可以实时检测文件是不是需要打包
   watch:true
  # reslove 这里是解析第三方包
  # 其中modules是配置寻找模块的根目录；extensions是配置搜索模块的后缀名（搜索模块时按照从左往右的顺   序搜索对应的后缀名模块）；alias 是给模块对应路劲单独起一个别名
   moudles:[
     path.reslove('node_modules')
   ]
   此时可以使用 import 'jquery'// 之类的
  # alias 别名
  # extensions

  modules: [ // 寻找模块的根目录，array 类型，默认以 node_modules 为根目录
      'node_modules' // 可以一次向后加
    ],
    extensions: ['.js', '.json', '.jsx', '.css'], // 模块的后缀名
    alias: { // 模块别名配置，用于映射模块
      'bootstrap': 'bootstrap: 'bootstrap/dist/css/bootstrap.css''
    }


# new webpack.DefinePlugin 定义一个环境变量 
  new webpack.DefinePlugin({  DEV:JSON.stringify('production') })
  console.log(DEV)
  if(DEV !=='production'){
    console.log(111)
  }
  
# 区分环境变量  很多时候，我们都需要针对不同的环境进行不用的操作。
  webpack.dev.js  webpack.prod.js 
  let { smart }  =require('webpack-merge')
  let base = require('./webpack.base.js')
  module.exports = smart(base,{
    mode: 'production'
  })

# noParse 优化项 不去解析 
   noParse:/jquery/
# IgonrePlugin 忽视某些文件
   <!-- moment -->
 new webpack.IgnorePlugin(/\.\/locale/,/moment/)

<!-- 分割 -->
# 搭建环境项目









# 创建 react
 npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react 
 npm install -D react react-dom

 #  Dllplugin 优化
   在使用 Dllplugin 之前，首先我们应该了解它是干什么的，如果你的项目够大的话，可能每次编译都要花费很多时间，那么Dllplugin就是用来处理这个事情的。
  
  new webpack.Dllplugin({ 
     name:'lld_[name]',
     path:path.resolve(__dirname,'dist','lld.json')
  })
  npx webpack --config webpack.config.react.js
# DllReferencePlugin
这个插件把只有 dll 的 bundle(们)(dll-only-bundle(s)) 引用到需要的预编译的依赖
new webpack.DllReferencePlugin({ 
     name:'lld_[name]',
     path:path.resolve(__dirname,'dist','lld.json') 
})



<!-- # happypack 多线程打包 替换我们之前的loader
 npm install happypack --save-dev

 const HappyPack = require('happypack');
 use: ['happypack/loader?id=babel'] -->
 <!-- 这里不讲解 -->


 
 