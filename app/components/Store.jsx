var React = require('react');

var WelcomeText = require('WelcomeText');
var ItemAPI = require('ItemAPI');
var ItemList = require('ItemList')

var Store = React.createClass({
  getItems : function(){
    var items = ItemAPI.getItems();
    return items;
  },

  render : function(){
    ItemAPI.setItems();
    return(
    <div>
      <WelcomeText></WelcomeText>
      <table class = "hover unstriped">
        <tr>
          <td colspan = "3" >Cart</td>
        </tr>
        <ItemList items = {this.getItems()}></ItemList>
          <tr>
            <td colspan = "3" >Cart</td>
          </tr>
      </table>
    </div>
  );
  }
});

module.exports = Store;
