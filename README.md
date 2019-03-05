# multi-page-webpack
多页面，webpack4，layui，jquery，artTemplate项目框架
## 简介
主要实现一个基于webpack4的多页开发项目框架，整合layui组件，jquery库以及artTemlate模板。
* 基础环境
  * HtmlWebpackPlugin，glob处理多页模板入口
  * url-loader，babel-loader处理字体和图片
  * html-loader处理html中路径问题
  * art-template-loader处理artTemplate模板引擎
  * exports-loader处理layui第三方非模块化的库，对layui源码进行修改，不在让其内部引用样式。
* 开发环境
  * HMR 
* 线上环境
  * MiniCssExtractPlugin提取css，sass代码块
  * OptimizeCssAssetsPlugin优化压缩css，sass资源
  * splitChunks分离第三库和公共代码块
  * UglifyJsPlugin打包压缩
## 结构
|-- .babelrc<br>
|-- .gitignore<br>
|-- package.json<br>
|-- postcss.config.js<br>
|-- README.md<br>
|-- config<br>
>> |-- config.js<br>
|   |-- webapck.config.prod.js<br>
|   |-- webpack.config.base.js<br>
|   |-- webpack.config.dev.js<br>
|   |-- webpack.config.test.js<br>
|-- src<br>
|   |-- index.html<br>
|   |-- index.js<br>
|   |-- common<br>
|   |-- login<br>
|   |-- person<br>
|   |-- vendors<br>
|       |-- layui<br>
## 使用
