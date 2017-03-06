var React = require('react');

var Data = require('../../api/jsonPlaceholderAPI.js');
var GetUsers = Data.GetUsers();

var DisplayAllUsers = require('./DisplayAllUsers.js');

console.log(Data.GetUsers());

var GetAllUsers = React.createClass({

	getInitialState: function(){
		return{
			arrOfUsers: []
		}
	},

	displayAllUsers: function(){
		var self = this;

		GetUsers.then(function(response){
			self.setState({
				arrOfUsers: response.data
			})
		})
	},

	componentDidMount: function(){
		this.displayAllUsers();
	},

	render: function(){
		console.log(this.state.arrOfUsers);
		var render = this.state.arrOfUsers.map(function(users, i){
			return <DisplayAllUsers key={i} usersObj={users}/>
		})
		return(
			<div className="container">
				{render}
			</div>
		)
	}
});

module.exports = GetAllUsers;