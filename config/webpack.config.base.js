//通用配置文件，不同环境的通用配置
const path = require('path');//nodejs路径模块，用于读取路径
const fs = require('fs');//nodejs文件模块，用于读取文件
const glob = require('glob');//文件路径匹配
const webpack = require('webpack');
const config = require('./config');
const entrys = {};//entrys多入口对象
const htmls = glob.sync(config.TPL_HTML_PATH);//获取html模板文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlPlugins = [];


//获取entrys，以src下的模块名作为入口名。注意：html模板名和js入口名保持一致，这是个公共约束规则。
htmls.forEach(html => {
    let htmlPath = html.split('/');
    let file = htmlPath.pop();
    let jsName = file.split('.')[0];
    let moduleName = htmlPath[htmlPath.length - 1];
    entrys[moduleName + '/' + moduleName + '_' + jsName] = path.resolve(__dirname, '../src/' + moduleName + '/js/' + jsName + '.js');
    let htmlConfig = {
        filename: 'html/' + moduleName + '/' + file,
        template: path.resolve(__dirname, '../src/' + moduleName + '/' + file),
        showErrors: true,
        inject: 'body',
        chunks: [moduleName + '/' + moduleName + '_' + jsName, 'jquery', 'layui'],
        hash: true,
        cache: true,
    };
    let htmlPlugin = new HtmlWebpackPlugin(htmlConfig);
    HtmlPlugins.push(htmlPlugin);
});
entrys['index'] = path.resolve(__dirname, '../src/index.js');

module.exports = {
    context: config.PROJECT_PATH,//基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    entry: entrys,
    output: {
        path: config.BUILD_PATH,//目标输出目录 path 的绝对路径
    },
    module: {
        // noParse: /layui|layui-src/,
        rules: [{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            // include: [config.SRC_PATH],//需要被loader 处理的文件或文件夹
            // exclude: [config.VENDORS_PATH], //排除不满足条件的文件夹（这样可以排除webpack查找不必要的文件）
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'fonts/[hash].[name].[ext]',
                    limit: 8192,
                    fallback: 'file-loader'
                }
            }]
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            // include: [config.SRC_PATH],
            // exclude: [config.VENDORS_PATH],
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[path][name].[ext]',
                    limit: 8192,
                    context: 'src/',
                    outputPath: 'img/',
                    publicPath: '../../img/',
                    useRelativePath: false,
                    fallback: 'file-loader',
                }
            }]
        }, {
            test: /\.js$/,
            include: [config.SRC_PATH],
            exclude: [config.VENDORS_PATH, config.NODE_MODULES_PATH],
            use: [{
                loader: 'babel-loader',
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    publicPath: "../",
                    attrs: ['img:src']
                }
            }],
        },
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            }
        ]
    },
    plugins: [
        ...HtmlPlugins,//扩展运算符生成所有的HtmlPlugins
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            showErrors: true,
            inject: 'body',
            chunks: ['index'],
            hash: true,
            cache: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
};