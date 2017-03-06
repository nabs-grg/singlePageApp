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
		});

		if(this.state.arrOfUsers.length > 0){
			return	(
			<div className="container">
				<h1 id="header">Ask Anything.</h1>
				<h2 id="project">Which project management software are we using?</h2>
				<h3 id="message">You have <span id="number">15</span> unaswered quesions</h3>
				<hr />
				{render}
			</div>
			)

		} else {
		
			return	(
				<div>
					<div className="loader"></div>
				</div>
			)
		}
	}
});

module.exports = GetAllUsers;