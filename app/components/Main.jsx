var React = require('react');

var Navigation = require('Navigation');
var ItemAPI = require('ItemAPI')

var Main = React.createClass({
  render : function(){
    ItemAPI.setItems();
    return(
      <div>
        <Navigation></Navigation>
        <div className = "row">
          <div className = "column small-centered medium-6 large-8 ">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
