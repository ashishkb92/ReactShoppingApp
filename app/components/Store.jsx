var React = require('react');
var uuid = require('node-uuid');
var {Link} = require('react-router');

var WelcomeText = require('WelcomeText');
var ItemAPI = require('ItemAPI');
var ItemList = require('ItemList')
var SearchItems = require('SearchItems');
var CartPageText = require('CartPageText');
var CartItemList = require  ('CartItemList');

var Store = React.createClass({
  getInitialState : function(){
    return{
      searchText:'',
      items : ItemAPI.getItems(),
      cartItems : ItemAPI.getCartItems(),
      totalPrice : ItemAPI.getTotalPrice(),
      numberOfItems : ItemAPI.getnumberOfItems(),
      page : 'store'
    }
  },

  componentDidUpdate : function (prevProps,prevState){
    ItemAPI.setCartItems(this.state.cartItems);
    ItemAPI.setTotalPrice(this.state.totalPrice);
    ItemAPI.setnumberOfItems(this.state.numberOfItems);
    /*if(this.state.totalPrice == prevState.totalPrice && this.state.searchText == prevState.searchText ){
      ItemAPI.setCartItems(this.state.cartItems);
      var totalPrice = 0 ;
      this.state.cartItems.forEach ((item)=> totalPrice += item.price);
      this.setState({
        totalPrice : totalPrice
      });
      ItemAPI.setTotalPrice(this.state.totalPrice)
    }*/

 },

  handleChange : function(searchText){
    this.setState({
      searchText : searchText.toLowerCase()
    })
  },

  handleAddtoCart: function(id,name,price){
  var {cartItems} = this.state;
  var totalPrice = 0 ;
  var numberOfItems = 0 ;

  var item = {
    id : id,
    name : name ,
    quantity : 1 ,
    price : price
  }

  if (cartItems.length === 0){
    cartItems =[{...item}];
    totalPrice = cartItems.reduce((sum,item)=> sum + item.price,0);
    numberOfItems = cartItems.reduce((sum,item)=> sum + item.quantity,0);
    this.setState({
      cartItems : cartItems,
      totalPrice : totalPrice,
      numberOfItems : numberOfItems
    });
  }else{
    var findId = cartItems.find(element=>element.id === item.id)
    if (typeof(findId) != "undefined"){
      cartItems = cartItems.map((element)=>{
        if (element.id == item.id){
          element.price += item.price;
          element.quantity += item.quantity;
        }
        return element;
      });
      totalPrice = cartItems.reduce((sum,item)=> sum + item.price,0);
      numberOfItems = cartItems.reduce((sum,item)=> sum + item.quantity,0);
      this.setState({
        cartItems : cartItems,
        totalPrice : totalPrice,
        numberOfItems : numberOfItems
      });
    }else{
      cartItems = [...cartItems,{...item}];
      totalPrice = cartItems.reduce((sum,item)=> sum + item.price,0);
      numberOfItems = cartItems.reduce((sum,item)=> sum + item.quantity,0);
      this.setState({
        cartItems : cartItems,
        totalPrice : totalPrice,
        numberOfItems : numberOfItems
      });
    }

  }


  },

  handleUpdateCartItem : function(id,quantity){
    if (quantity === ''){
      quantity = 0;
    }
    var quantity = parseInt(quantity)
    var {cartItems ,items} = this.state;
    var totalPrice = 0 ;
    var numberOfItems = 0 ;
    var idobject = items.find((item)=>item.id === id)
    var newPrice = quantity * parseInt(idobject.price);
    cartItems = cartItems.map((element)=>{
      if (element.id == id){
        element.price = newPrice;
        element.quantity = quantity;
      }
      return element;
    });
    totalPrice = cartItems.reduce((sum,item)=> sum + item.price,0);
    numberOfItems = cartItems.reduce((sum,item)=> sum + item.quantity,0);
    this.setState({
      cartItems : cartItems,
      totalPrice : totalPrice,
      numberOfItems : numberOfItems
    });
  },

  handleDeleteWholeItem : function(id){
    var {cartItems } = this.state;
    var totalPrice = 0 ;
    var numberOfItems = 0 ;
    var cartItems = cartItems.filter((item)=>item.id != id);
    totalPrice = cartItems.reduce((sum,item)=> sum + item.price,0);
    numberOfItems = cartItems.reduce((sum,item)=> sum + item.quantity,0);
    this.setState({
      cartItems : cartItems,
      totalPrice : totalPrice,
      numberOfItems : numberOfItems
    });
 },

  handleGotoCart : function(){
    this.setState({
      page : 'cart'
    });
  },

  handleGotoStore : function(){
    this.setState({
      page : 'store'
    });
  },




  render : function(){    
    var {items, searchText, totalPrice, cartItems, numberOfItems ,page } = this.state;
    var filteredItems = ItemAPI.filterItems(items,searchText);
    if (page === 'store'){
      return(
      <div>
        <WelcomeText></WelcomeText>
        <SearchItems onChange = {this.handleChange}></SearchItems>
          <div >
            <p onClick ={this.handleGotoCart}>{numberOfItems} items : INR {totalPrice}</p>
          </div>
        <div >
          <ItemList items = {filteredItems} onAddtoCart = {this.handleAddtoCart}></ItemList>
        </div>
        <div >
          <p onClick ={this.handleGotoCart}>{numberOfItems} items : INR {totalPrice}</p>
        </div>
      </div>
    );
  }else {
    return(
      <div>
        <CartPageText></CartPageText>
        <div>
          <CartItemList numberOfItems={numberOfItems} totalPrice = {totalPrice} cartItems  = {cartItems} onUpdateCart = {this.handleUpdateCartItem} onDeleteWholeItem = {this.handleDeleteWholeItem} onGotoStore = {this.handleGotoStore}></CartItemList>
        </div>
      </div>
    )
  }

  }
});

module.exports = Store;
