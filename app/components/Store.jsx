var React = require('react');
var uuid = require('node-uuid');

var WelcomeText = require('WelcomeText');
var ItemAPI = require('ItemAPI');
var ItemList = require('ItemList')
var SearchItems = require('SearchItems');

var Store = React.createClass({
  getInitialState : function(){
    return{
      searchText:'',
      items : ItemAPI.getItems(),
      cartItems : ItemAPI.getCartItems(),
      totalPrice : ItemAPI.getTotalPrice()
    }
  },

  componentDidUpdate : function (prevProps,prevState){
    if(this.state.totalPrice == prevState.totalPrice){
      ItemAPI.setCartItems(this.state.cartItems);
      var totalPrice = 0 ;
      this.state.cartItems.forEach ((item)=> totalPrice += item.price);
      this.setState({
        totalPrice : totalPrice
      });
      ItemAPI.setTotalPrice(this.state.totalPrice)
    }

 },

  handleChange : function(searchText){
    this.setState({
      searchText : searchText.toLowerCase()
    })
  },

  handleAddtoCart: function(name,price){
    this.setState({
      cartItems:[
        ...this.state.cartItems,
        {
          id   :uuid(),
          name : name,
          price : price
        }
      ]
    });


  },

  render : function(){
    ItemAPI.setItems();
    var {items, searchText, totalPrice} = this.state;
    var filteredItems = ItemAPI.filterItems(items,searchText);
    return(
    <div>
      <WelcomeText></WelcomeText>
      <SearchItems onChange = {this.handleChange}></SearchItems>
      <div >cart price: {totalPrice}</div>
      <div >
        <ItemList items = {filteredItems} onAddtoCart = {this.handleAddtoCart}></ItemList>
      </div>
      <div >cart price: {totalPrice}</div>
    </div>
  );
  }
});

module.exports = Store;
