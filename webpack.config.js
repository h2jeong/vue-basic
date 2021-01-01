const path = require('path'); // 노드가 만들어준 스크립트, path 찾아가기 helper;
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // webpacking 수많은 스크립트를 하나로 뭉쳐주기
    mode: 'development',
    devtool: 'eval', // hidden-source-map - 배포용
    resolve: {
        extensions: [
            '.js', '.vue',
        ]
    },
    entry: {
        app: path.join(__dirname, 'main.js'), // 하나로 뭉쳐진 파일의 이름을 app에 설정해준다.
    },
    module: {
        // webpack의 핵심 - 어떻게 합칠 건지, 처리할 건지를 설정한다.
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', // app에 들어간 파일명을 자동으로 넣어주기
        path: path.join(__dirname, 'dist'), // 폴더 경로, 현재 위치(dirname)과 합쳐준다.
    },
}