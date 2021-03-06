var path = require('path');

module.exports = {
    // 入口
    entry: './main',
    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.less/, loader: 'style!css!autoprefixer!less'},
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer!less'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './components'),
            jquery: path.join(__dirname, './lib/jquery.min.js'),
            vue: path.join(__dirname, './lib/vue.js'),
            lodash: path.join(__dirname, './lib/lodash.min.js'),
            config: path.join(__dirname, './resource/config'),
            script: path.join(__dirname, './script'),
            vueRouter: path.join(__dirname, './lib/vue-router.min.js'),
            vueResource: path.join(__dirname, './lib/vue-resource.min.js'),
        },
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: '#source-map'
};
