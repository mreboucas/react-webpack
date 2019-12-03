'use strict'

var React = require('react')
var createReactClass = require('create-react-class')

var Title = createReactClass({
    render: function() {
        //return <h1>Título</h1>
        return React.createElement('h1', null, 'Título')
    }
})

/*
Export padrão
module.exports = Title;

*/

/**
 * ES5 Export
 * 
 * Permite você importar direto: import Title from './app/Title'
 */
export default Title;