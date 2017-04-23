var $ = require('jquery');
var uuid = require('node-uuid');

module .exports = {
  items : [
  {
    id : uuid(),
    img : 'images/apple.png',
    name : 'Apple',
    price : 40
  },
  {
    id : uuid(),
    img : 'images/grape.png',
    name : 'Grape',
    price : 20
  },
  {
    id : uuid(),
    img : 'images/grapefruit.jpg',
    name : 'Grapefruit',
    price : 30
  },
  {
    id : uuid(),
    img : 'images/banana.jpg',
    name : 'Banana',
    price : 50
  },
  {
    id : uuid(),
    img : 'images/pineapple.jpg',
    name : 'Pineapple',
    price : 60
  }
],

setItems : function() {
  if(localStorage.getItem('items')===null){
  localStorage.setItem('items',JSON.stringify(this.items));
  }
},

getItems : function() {
  var stringItems = localStorage.getItem('items');
  var items = [];
  items = JSON.parse(stringItems)
  return $.isArray(items) ? items : [];
},

getCartItems : function() {
  var stringItems = localStorage.getItem('cartItems');
  var items = [];
  items = JSON.parse(stringItems)
  return $.isArray(items) ? items : [];
},

getTotalPrice : function() {
  var totalPrice = parseInt(localStorage.getItem('totalPrice'));
  if (isNaN(totalPrice)){
    return 0 ;
  }else {
    return totalPrice;
  }
},

getnumberOfItems : function() {
  var numberOfItems = parseInt(localStorage.getItem('numberOfItems'));
  if (isNaN(numberOfItems)){
    return 0 ;
  }else {
    return numberOfItems;
  }
},

setCartItems : function(cartItems) {
  if ($.isArray(cartItems)){
     localStorage.setItem('cartItems',JSON.stringify(cartItems));
     return cartItems;
   }
},

setTotalPrice : function(totalPrice) {
   var stringTotalPrice = totalPrice.toString();
   localStorage.setItem('totalPrice',stringTotalPrice);
},

setnumberOfItems : function(numberOfItems) {
   var stringnumberOfItems = numberOfItems.toString();
   localStorage.setItem('numberOfItems',stringnumberOfItems);
},

removeItems : function() {

  localStorage.removeItem('items');

},


removeCartItems : function() {
    localStorage.removeItem('cartItems')
},

removeTotalPrice : function() {
     localStorage.removeItem('totalPrice')
},

removenumberOfItems : function() {
     localStorage.removeItem('numberOfItems')
},


filterItems : function(items,searchText){
  var filteredItems = items;

  filteredItems = filteredItems.filter((item)=>{
    var text = item.name.toLowerCase();
    return searchText.length===0 || text.indexOf(searchText)>-1;
  });

  return filteredItems;
}

}
