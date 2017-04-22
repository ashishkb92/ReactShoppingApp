var React = require('react');

var Item = require('Item')

var ItemList = React.createClass({

  render : function(){
    var {items} = this.props;
    var renderList =() =>{
      return(items.map((item)=>{
      return(<Item key = {item.id} {...item} ></Item>);
    })
  )};
    return(<div>
      {renderList()}
  </div>
         );
  }
});

module.exports = ItemList;
