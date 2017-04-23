var React = require('react');

var CartItem = React.createClass({
  getInitialState:function (){
    return({
      firstTime : true
  });
},

  handleUpdateCartItem : function(){
    var {id} = this.props;
    var quantity = this.refs.quantity.value
    this.props.onUpdateCart(id, quantity);
  },

 handleDeleteWholeItem : function(){
   var {id} = this.props;
   this.props.onDeleteWholeItem(id);
},


  render : function(){
    var {id, name, price , quantity} = this.props;
    var {firstTime} = this.state;
    return(
      <div className="row">
        <div className="small-2 large-2 columns">{name}</div>
        <div className="small-4 large-4 columns"> <input type="number" ref="quantity" value = {quantity} onChange = {this.handleUpdateCartItem}/></div>
        <div className="small-2 large-2 columns"><b>INR {price}</b></div>
        <div className="small-4 large-4 columns"><button className = "button expanded alert" onClick ={this.handleDeleteWholeItem} >Remove</button></div>
      </div>

  );
  }
});

module.exports = CartItem;
