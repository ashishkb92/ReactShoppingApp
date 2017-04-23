var React = require('react');

var Item = require('Item')

var ItemList = React.createClass({

  handleAddtoCart: function(id, name ,price){
    this.props.onAddtoCart(id, name, price);
  },

  render : function(){
    var {items} = this.props;
    var renderList =() =>{
      return(items.map((item)=>{
      return(<Item key = {item.id} {...item} onAddtoCart = {this.handleAddtoCart} ></Item>);
    })
  )};
    return(
     <div>{renderList()}</div>);
  }
});

module.exports = ItemList;
