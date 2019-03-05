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
|-- .babelrc
|-- .gitignore
|-- package.json
|-- postcss.config.js
|-- README.md
|-- config
|   |-- config.js
|   |-- webapck.config.prod.js
|   |-- webpack.config.base.js
|   |-- webpack.config.dev.js
|   |-- webpack.config.test.js
|-- src
|   |-- index.html
|   |-- index.js
|   |-- common
|   |   |-- common.js
|   |   |-- util.js
|   |-- login
|   |   |-- index.html
|   |   |-- css
|   |   |   |-- index.scss
|   |   |-- img
|   |   |   |-- bgr.jpg
|   |   |-- js
|   |   |   |-- index.js
|   |   |-- tpl
|   |       |-- index.art
|   |-- person
|   |   |-- index.html
|   |   |-- index2.html
|   |   |-- css
|   |   |   |-- index.scss
|   |   |   |-- index2.scss
|   |   |-- img
|   |   |   |-- yunshao.gif
|   |   |-- js
|   |   |   |-- index.js
|   |   |   |-- index2.js
|   |   |-- tpl
|   |       |-- add.art
|   |       |-- back.art
|   |       |-- operate.art
|   |-- vendors
|       |-- layui
## 使用
