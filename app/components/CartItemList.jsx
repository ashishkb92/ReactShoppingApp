var React = require('react');
var {Link} = require('react-router');

var CartItem = require('CartItem')

var CartItemList = React.createClass({

  handleUpdateCartItem : function(id,quantity){
    this.props.onUpdateCart(id, quantity);
  },

  handleDeleteWholeItem : function(id){
    this.props.onDeleteWholeItem(id);
 },

 handleGotoStore : function(){
   this.props.onGotoStore();
 },

  render : function(){
    var {cartItems , numberOfItems, totalPrice} = this.props;
    var renderList =() =>{
      return(cartItems.map((cartItem)=>{
      return(<CartItem key = {cartItem.id} {...cartItem} onUpdateCart = {this.handleUpdateCartItem} onDeleteWholeItem = {this.handleDeleteWholeItem}></CartItem>);
    })
  )};
    if (totalPrice != 0){
      return(
       <div className="row">
         <div className="small-8 large-8 columns">
           <div className="row" style = {{paddingTop : '20px',paddingBottom : '30px' }}>
             <div className="small-2 large-2 columns"><b>Item</b></div>
             <div className="small-4 large-4 columns"><b>Quantity</b> </div>
             <div className="small-2 large-2 columns"><b>Price</b></div>
             <div className="small-4 large-4 columns"></div>
           </div>
           {renderList()}
           <div className="row" style = {{paddingTop : '20px',paddingBottom : '30px' }} >
             <div className="small-2 large-2 columns"><b>Total</b></div>
             <div className="small-4 large-4 columns"> <b>{numberOfItems}</b></div>
             <div className="small-2 large-2 columns"><b>{totalPrice}</b></div>
             <div className="small-4 large-4 columns"></div>
           </div>
           </div>
           <div className="small-4 large-4 columns" style = {{paddingLeft : '40px' }} >
             <div>
               <button className = "button expanded" onClick ={this.handleGotoStore} >Go to Store</button>
             </div>
             <div>
               <Link to = '/thanks'><button className = "button expanded secondary"  >Checkout</button></Link>
             </div>

         </div>

       </div>


     );
   }else{
     return(
      <div className="row">
        <div className="small-8 large-8 columns">
          <div className="row" style = {{paddingTop : '20px',paddingBottom : '30px' }} >
            <div className="small-2 large-2 columns"><b>Item</b></div>
            <div className="small-4 large-4 columns"><b>Quantity</b> </div>
            <div className="small-2 large-2 columns"><b>Price</b></div>
            <div className="small-4 large-4 columns"></div>
          </div>
          {renderList()}
          <div className="row" style = {{paddingTop : '100px',paddingBottom : '30px' }} >
            <div className="small-2 large-2 columns"><b>Total</b></div>
            <div className="small-4 large-4 columns"> <b>{numberOfItems}</b></div>
            <div className="small-2 large-2 columns"><b>{totalPrice}</b></div>
            <div className="small-4 large-4 columns"></div>
          </div>
          </div>
          <div className="small-4 large-4 columns" style = {{paddingLeft : '40px' }}>
            <div>
              <button className = "button expanded" onClick ={this.handleGotoStore} >Go to Store</button>
            </div>


        </div>

      </div>


    );
   }

  }

});

module.exports = CartItemList;
