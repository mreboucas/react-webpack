'use strict'

const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path : path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    /**
     * Configuração do BABEL -> fazer o transpile do ES6 para o ES5 para o browser rodar.
     * Colaquei as entradas no .babelrc
     */
    
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             include: /src/,
             loader: 'babel-loader'
            }]
        }
    
}