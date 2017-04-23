var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render : function(){
    return(
    <div className = "top-bar" style = {{backgroundColor : '#333333' }}>
      <div className = "top-bar-left" >
        <ul className = "menu" style = {{backgroundColor : '#333333'}} >
          <li className = "menu-text" style = {{color : 'white' }} >
            React Store
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu" style = {{backgroundColor : '#333333'}}>
          <li className="menu-text" style = {{color : 'white' }} >
            Created by Ashish Kumar
          </li>
        </ul>
      </div>
    </div>
  );
  }
});

module.exports = Navigation;
