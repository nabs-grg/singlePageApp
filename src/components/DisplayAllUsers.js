var React = require('react');
var Link = require('react-router').Link;

var DisplayAllUsers = React.createClass({
	
	render: function(){

		var userId = this.props.usersObj.id;

		return	(

			<div className="user-card new-user-card">
				<h1 id="username">{this.props.usersObj.username}</h1>
				<h3>{this.props.usersObj.name}</h3>
				<h3>{this.props.usersObj.email}</h3>
				<Link to={"/users/" + userId}>
					<button type="button" className="btn btn-default">View Post</button>
				</Link>
			</div>
			
		)
	}
});

module.exports = DisplayAllUsers;