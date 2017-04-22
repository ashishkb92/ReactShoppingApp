var React = require('react');


var Item = React.createClass({
  render : function(){
    var {img, name} = this.props;
    return(
    <div>
      <tr>
        <td>
          <img src = {img} height="20" width="20"></img>
        </td>
        <td>
          {name}
        </td>
        <td>
          Add to cart
        </td>
      </tr>
    </div>
  );
  }
});

module.exports = Item;
