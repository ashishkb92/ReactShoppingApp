var React = require('react');
var uuid = require('node-uuid');
var {Link} = require('react-router');

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
    if(this.state.totalPrice == prevState.totalPrice && this.state.searchText == prevState.searchText ){
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
    var {items, searchText, totalPrice, cartItems} = this.state;
    var filteredItems = ItemAPI.filterItems(items,searchText);
    var noOfItems = cartItems.length;
    return(
    <div>
      <WelcomeText></WelcomeText>
      <SearchItems onChange = {this.handleChange}></SearchItems>
        <div >
          <Link to ='/cart'>
            {noOfItems} items : {totalPrice}
          </Link>
        </div>
      <div >
        <ItemList items = {filteredItems} onAddtoCart = {this.handleAddtoCart}></ItemList>
      </div>
      <div >
        <Link to ='/cart'>
          {noOfItems} items : {totalPrice}
        </Link>
      </div>
    </div>
  );
  }
});

module.exports = Store;
