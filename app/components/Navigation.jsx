var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render : function(){
    return(
    <div className = "top-bar">
      <div className = "top-bar-left">
        <ul className = "menu">
          <li className = "menu-text">
            React Store
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by Ashish Kumar
          </li>
        </ul>
      </div>
    </div>
  );
  }
});

module.exports = Navigation;
