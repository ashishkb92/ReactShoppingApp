var React = require('react');

var WelcomeText = ()=>{
  return(
    <div style = {{paddingTop : '30px',paddingBottom : '30px' }}  >
        Welcome to React Store <br/>
        Please select the product you want to add in your shopping cart<br/>
        When you are done , click the shopping cart icon to review your order and check out.
    </div>
  );
}
module.exports = WelcomeText;
