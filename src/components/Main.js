var React = require('react');
var Header = require('./Header.js');

console.log(document.location.href);

var Main = React.createClass({

	render: function(){
		//console.log(this.props.location.pathname.toString() === '/');
		return(
			<div>
				<Header />
				<div id="center">
					{this.props.children}
				</div>
			</div>
		)
	}

});

module.exports = Main;