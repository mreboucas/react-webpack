//console.log('Webpack is working');

'use strict'
/**
 * @INFO
 * Required sem o ponto ele vai no node_modules
 * com o ponto ele vai no diretório local, provavelmente são os seus js
 */
/*var sum = require('./app.js');*/
var Title = require('./app');
var React = require('react')
var ReactDOM = require('react-dom')

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)

/*console.log(sum(10,5));*/