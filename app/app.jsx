var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// This is ES6 above (object destructuring), ES5 would look like this:
// var Route = require('react-router').Route;

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>Template React 3</p>,
//   document.getElementById('app')
// );

// require('./redux-example.jsx');
require('./redux-todo-example.jsx');
