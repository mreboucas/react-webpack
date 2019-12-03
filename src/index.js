//console.log('Webpack is working');

'use strict'
/**
 * @INFO
 * Required sem o ponto ele vai no node_modules
 * com o ponto ele vai no diretório local, provavelmente são os seus js
 */
/*var sum = require('./app.js');*/

//var Title = require('./app');
//var React = require('react')
//var ReactDOM = require('react-dom')

import Title from './app'
import React from 'react';
import ReactDom from 'react-dom'
/*
Importando apenas o 'render' do react DOM, 
shorthand notation
*/
import {render} from 'react-dom'

var ReactDOM = require('react-dom')

//ReactDOM.render(
render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)

/*console.log(sum(10,5));*/