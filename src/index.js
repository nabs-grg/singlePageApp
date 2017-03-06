var React = require('react');
var ReactDOM = require('react-dom');

//components
var GetAllUsers = require('./components/GetAllUsers.js');

//scss
require('../public/style.scss');

ReactDOM.render(<GetAllUsers />,document.getElementById('app'),function(){
	console.log('react app rendered successfully onto the dom!');
});
