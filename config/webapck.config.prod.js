const webpackBase = require('./webpack.config.base');
const config = require('./config');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const glob = require('glob');//文件路径匹配
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const htmls = glob.sync(config.TPL_HTML_PATH);//获取html模板文件

function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}

let cssPlugins = {};
htmls.forEach(html => {
    let htmlPath = html.split('/');
    let file = htmlPath.pop();
    let jsName = file.split('.')[0];
    let moduleName = htmlPath[htmlPath.length - 1];
    let entryName = moduleName + '_' + jsName;
    cssPlugins[entryName] = {
        name: entryName,
        test: (m, c, entry = entryName) => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
        chunks: 'all',
        enforce: true
    }
});

cssPlugins['index'] = {
    name: 'index',
    test: (m, c, entry = 'index') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
    chunks: 'all',
    enforce: true
};

const webpackPro = {//生产环境配置
    output: {
        filename: 'js/[name].[chunkhash].js',
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }, 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }, 'css-loader', 'postcss-loader', 'sass-loader']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(['./dist/'], {
            root: config.PROJECT_PATH
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash].css",
        }),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,//模块最小体积
            minChunks: 1,//模块最小被引用的次数
            maxAsyncRequests: 5,//按需加载的最大并行请求数
            maxInitialRequests: 3,//一个入口最大并行请求数
            automaticNameDelimiter: '~',//文件连接符
            name: true,
            cacheGroups: {
                'jquery': {
                    test: /jquery/,
                    name: 'jquery',
                    priority: 100
                },
                'layui': {
                    test: /layui/,
                    name: 'layui',
                    priority: 100
                },
                ...cssPlugins
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({}),
        ]
    }
};


module.exports = webpackMerge(webpackBase, webpackPro);



