const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    // 시작점이 되는 JS 파일을 설정합니다.
    entry: './src/index.js',
    // 번들링 된 파일이 출력된 위치를 설정합니다.
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    resolve: {
        // 생략된 확장자의 기본 확장자를 설정해줍니다.
        extensions: ['.js', '.jsx']
    },
    // https://webpack.kr/configuration/devtool/
    devtool: 'eval-cheap-source-map',
    // devServer에 대한 설정입니다.
    devServer: {
        port: 3000,
        hot: true,
        open: 'http://localhost:3000'
    },
    // 모듈에 적용할 로더와 로더의 설정을 정의합니다.
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpeg|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ],
    },
    // 번들링 된 파일에 대한 플러그인을 설정합니다.
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};
