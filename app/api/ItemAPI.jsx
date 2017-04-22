var $ = require('jquery');
var uuid = require('node-uuid');

module .exports = {
  items : [
  {
    id : uuid(),
    img : 'apple.png',
    name : 'Apple',
    price : 40
  },
  {
    id : uuid(),
    img : 'grape.png',
    name : 'Grape',
    price : 20
  },
  {
    id : uuid(),
    img : 'grapefruit.jpg',
    name : 'Grapefruit',
    price : 30
  },
  {
    id : uuid(),
    img : 'banana.jpg',
    name : 'Banana',
    price : 50
  },
  {
    id : uuid(),
    img : 'pineapple.jpg',
    name : 'Pineapple',
    price : 50
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
}
}
