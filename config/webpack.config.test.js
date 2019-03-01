const webpackBase = require('./webpack.config.base.js');
const config = require('./config.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackTest = { //开发环境配置
    output: {
        filename: 'js/[name].[hash].js',
    },
    mode:'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']//style-loader：用<style>标签，把css加入到dom中；css-loader：加载css文件；postcss-loader：增加浏览器前缀
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']//sass-loader：解析sass文件
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),//HMR直接返回更新文件名，而不是更新id
        new webpack.HotModuleReplacementPlugin(),//热替换
        new webpack.DefinePlugin({//全局常量
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ]
};

module.exports = webpackMerge(webpackBase, webpackTest);