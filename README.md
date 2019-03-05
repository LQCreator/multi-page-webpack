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
```
|-- config                                    //配置文件目录
|   |-- config.js                             //基础路径配置
|   |-- webapck.config.prod.js                //线上环境配置文件
|   |-- webpack.config.base.js                //公共配置文件
|   |-- webpack.config.dev.js                 //开发环境配置文件
|-- src                                       //业务代码目录
|   |-- index.html                            //默认首页模板
|   |-- index.js                              //默认首页入口
|   |-- common                                //公共库目录
|   |-- login                                 //示例
|   |-- person                                //示例
|   |-- vendors                               //第三方库文件目录
|       |-- layui
|-- .babelrc                                  //babel配置文件
|-- .gitignore                                //git忽略文件
|-- package.json                              //npm包管理文件
|-- postcss.config.js                         //postcss配置文件
|-- README.md
```
## 使用
