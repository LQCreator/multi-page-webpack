# multi-page-webpack
多页面，webpack4，layui，jquery，artTemplate项目框架
# 简介
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
