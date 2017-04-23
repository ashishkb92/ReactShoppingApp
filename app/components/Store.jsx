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
      totalPrice : ItemAPI.getTotalPrice(),
      numberOfItems : ItemAPI.getnumberOfItems(),
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

  render : function(){
    ItemAPI.setItems();
    var {items, searchText, totalPrice, cartItems, numberOfItems} = this.state;
    var filteredItems = ItemAPI.filterItems(items,searchText);
    var noOfItems = cartItems.length;
    return(
    <div>
      <WelcomeText></WelcomeText>
      <SearchItems onChange = {this.handleChange}></SearchItems>
        <div >
          <Link to ='/cart'>
            {numberOfItems} items : {totalPrice}
          </Link>
        </div>
      <div >
        <ItemList items = {filteredItems} onAddtoCart = {this.handleAddtoCart}></ItemList>
      </div>
      <div >
        <Link to ='/cart'>
          {numberOfItems} items : {totalPrice}
        </Link>
      </div>
    </div>
  );
  }
});

module.exports = Store;
