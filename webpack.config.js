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
    module: { // javascript가 아닌 애들은 js로 바꿔준다.
        // webpack의 핵심 - 어떻게 합칠 건지, 처리할 건지를 설정한다.
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }]
    },
    plugins: [ // output으로 나오기 전에 처리해야 할 것들을 설정해준다. (부가적)
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', // app에 들어간 파일명을 자동으로 넣어주기
        path: path.join(__dirname, 'dist'), // 폴더 경로, 현재 위치(dirname)과 합쳐준다.
        publicPath: '/dist/', // webpack-dev-server 실행하려면 가상의 경로 지정, 메모리에 저장된 app.js를 불러온다.
    },
}