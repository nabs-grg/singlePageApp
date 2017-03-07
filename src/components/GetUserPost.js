var React = require('react');

var DisplayUserPost = require('./DisplayUserPost.js')
var Data = require('../../api/jsonPlaceholderAPI.js');
var GetAllPost = Data.getUserPosts;

var GetUserPost = React.createClass({

	getInitialState: function(){
		return{
			arrOfPost: []
		}	
	},

	showPost: function() {
		var self = this;
		var id = this.props.params.userId;

		GetAllPost(id).then(function(response){
			self.setState({
				arrOfPost: response.data
			});
		})
	},

	componentDidMount: function() {
		this.showPost();	
	},

	render: function(){
		//console.log(this.props.location.pathname);

		if(this.state.arrOfPost.length > 0){
			var render = this.state.arrOfPost.map(function(posts,i){
				return <DisplayUserPost posts={posts} key={i}/>
			});

			return(
				<div>
					<h1 id="header">All the post for user {this.state.arrOfPost[1].userId}</h1>
					{render}
				</div>
			)
		} else {
			return(
				<div>
					<div className="loader"></div>
				</div>
			)
		}
	}

});

module.exports = GetUserPost;