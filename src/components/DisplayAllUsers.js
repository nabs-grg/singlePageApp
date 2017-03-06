var React = require('react');

var DisplayAllUsers = React.createClass({
	
	render: function(){

		return	(

			<div className="user-card new-user-card">
				<h1>{this.props.usersObj.username}</h1>
				<h3>{this.props.usersObj.name}</h3>
				<h3>{this.props.usersObj.email}</h3>
				<button className="btn btn-default">View Post</button>
			</div>
			
		)
	}
});

module.exports = DisplayAllUsers;