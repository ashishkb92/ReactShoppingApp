var React = require('react');

var ItemAPI = require('ItemAPI')

var Thank = React.createClass({
  render : function(){
    return(
    <div style = {{paddingTop : '200px' }}>
      <h2>Thanks for shopping. Have a nice day :) </h2>
    </div>
  );
},

  componentDidMount :function(){
    ItemAPI.removeItems();
    ItemAPI.removeCartItems();
    ItemAPI.removeTotalPrice();
    ItemAPI.removenumberOfItems();
  }
});



module.exports = Thank;
