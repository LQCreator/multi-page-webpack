//全局配置，比如HTML文件的路径，publicPath等

const path = require('path');

//__dirname是当前文件所在目录，process.cwd()是node当前工作的目录，即pack.json所在目录

const PROJECT_PATH = process.cwd();

const config = {
    PROJECT_PATH,//项目目录
    SRC_PATH: path.join(PROJECT_PATH, './src/'),//源文件目录
    BUILD_PATH: path.join(PROJECT_PATH, './dist/'),//打包目录
    NODE_MODULES_PATH: path.join(PROJECT_PATH, './node_modules'),//node_modules
    TPL_HTML_PATH: path.join(PROJECT_PATH, './src/*/*.html'),//html模板目录
    VENDORS_PATH: path.join(PROJECT_PATH, './src/vendors'),//vendors目录
};

module.exports = config;