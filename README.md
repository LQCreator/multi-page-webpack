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
`npm install`      
`安装依赖包`  
  
`npm run dev`    
`webpack-dev-server启动HMR`  
  
`npm run dev2`  
`生成开发环境的包，主要用于调试开发环境配置`  
   
`npm run build`  
`生成线上环境的包，主要用于线上环境部署`  
    
`npm run webpack-debugger`  
`配合chrome://inspect/#devices，对配置文件进行调试`  
## 生成的目录结构   
```
|-- dist                                                                //dist为打包后生成的目录
    |   |-- index.html
    |   |-- css                                                         //提取css的目录，并分别放到对应模块的文件夹中
    |   |   |-- layui.d6865fef6ea19ac3ba85.css
    |   |   |-- login
    |   |   |   |-- login_index.74223b980dfe63cca92b.css
    |   |   |-- person
    |   |       |-- person_index.3976c113cdfa75162e57.css
    |   |       |-- person_index2.b793a50ed98ba38ae80c.css
    |   |-- fonts                                                       //提取字体的目录
    |   |   |-- 0208023e7b4a46473764cc8a59eef107.iconfont.eot
    |   |   |-- d8583a8444b3b76b28c9c7436abc7cbe.iconfont.ttf
    |   |   |-- e9caaa0617fa61c01f765960d10da0ef.iconfont.woff
    |   |-- html                                                        //html生成目录
    |   |   |-- login
    |   |   |   |-- index.html
    |   |   |-- person
    |   |       |-- index.html
    |   |       |-- index2.html
    |   |-- img                                                         //图片提取目录，并分别放到对应模块的文件夹下面
    |   |   |-- login
    |   |   |   |-- img
    |   |   |       |-- bgr.jpg
    |   |   |-- vendors
    |   |       |-- layui
    |   |           |-- css
    |   |           |   |-- modules
    |   |           |       |-- layer
    |   |           |           |-- default
    |   |           |               |-- icon.png
    |   |           |-- font
    |   |               |-- iconfont.svg
    |   |-- js                                                           //js bundle生成目录
    |       |-- index.7b3434a8e1da54a75754.js                            //默认首页的js bundle
    |       |-- jquery.0d32a07b39f97df49408.js                           //抽离的jquery包
    |       |-- layui.d6865fef6ea19ac3ba85.js                            //抽离的layui包
    |       |-- login
    |       |   |-- login_index.74223b980dfe63cca92b.js
    |       |-- person
    |           |-- person_index.3976c113cdfa75162e57.js
    |           |-- person_index2.b793a50ed98ba38ae80c.js
```
## 注意
```
打包生成的html文件会被放在dist/html下面，所以默认首页跳转路径跟目录结构路径有所区别，window.location.href = './html/login/index.html';需要加上
html文件夹。建议，默认首页只做跳转，不作为登录页。
npm run build会在8888端口启动BundleAnalyzerPlugin，用来可视化分析打包后的文件。
```
## 示例
```
示例位于src目录下，npm run dev就可以启动示例。
```
## 感谢
`谢谢大家的指正与意见！`
