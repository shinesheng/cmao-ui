const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    //页面入口文件配置
    entry: {
        index: './src/main.js'
    },
    output: {
        path: path.join(__dirname, '/dist'), // 打包后生成的文件夹
        filename: 'js/[name].js',
        // publicPath: './',
        clean: true, // 每次构建都清除dist包
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main.ejs', // html模板
            filename: 'index.html',
            inject: true,
            hash: true,
            chunks: ['index']
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['vendor', 'runtime'],
        //     filename: '[name].js'
        // })
        new MiniCssExtractPlugin({
            filename: 'css/[name]_[contenthash:8].css', // 抽离整的css文件名称
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], //从右向左解析
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
}