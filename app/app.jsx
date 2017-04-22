var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Product = require('Product');
var Store = require('Store');
var Cart = require('Cart');


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = '/' component = {Main}>
      <IndexRoute component = {Store}></IndexRoute>
      <Route path = '/product' component = {Product}></Route>
      <Route path = '/cart' component = {Cart}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
