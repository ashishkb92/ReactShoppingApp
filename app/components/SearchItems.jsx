var React = require('react');

var SearchItems = React.createClass({
  handleChange : function(){
    var searchText = this.refs.searchText.value;
    this.props.onChange(searchText);
  },

  render : function(){
    return(
    <div>
      <input type="search" ref = "searchText" placeholder = "Search here" onChange = {this.handleChange}></input>
    </div>
  );
  }
});

module.exports = SearchItems;
