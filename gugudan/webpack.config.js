const path = require('path');

module.exports = {
    name : 'gugudan',
    mode : 'development',
    devtool : 'eval',
    resolve: {
        extensions: ['.jsx', '.js'],
    },

    entry : {
        app : './client',
    }, // 입력

    module : {
        rules : [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options : {
                presets : [
                    ['@babel/preset-env', {
                        targets : {
                            browsers : ['> 1% in KR'],
                        },
                        debug : true,
                    }],
                    '@babel/preset-react',
                ],
                plugins : [],
            },
        }],
    },

    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js',
    } // 출력
}; 