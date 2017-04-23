var React = require('react');


var Item = React.createClass({
  handleAddtoCart : function(){
     var {id, name, price} = this.props;
     this.props.onAddtoCart(id, name, price);
  },
  render : function(){
    var {id, img, name, price} = this.props;
    return(
      <div className="row">
        <div className="small-2 large-2 columns"><img src = {img} height="50" width="40"></img></div>
        <div className="small-4 large-4 columns">{name}</div>
        <div className="small-2 large-2 columns"><b>INR {price}</b></div>
        <div className="small-4 large-4 columns"><button className = "button expanded" onClick ={this.handleAddtoCart} >add to cart</button></div>
      </div>

  );
  }
});

module.exports = Item;
