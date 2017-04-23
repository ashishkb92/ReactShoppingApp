var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Thank = require('Thank');
var Store = require('Store');



// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = '/' component = {Main}>
      <IndexRoute component = {Store}></IndexRoute>
      <Route path = '/thanks' component = {Thank}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
