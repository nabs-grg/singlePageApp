var React = require('react');

var DisplayUserPost = React.createClass({
	render: function(){
		var postId = this.props.posts.id;

		return(
			<div className="post-card">
				<h2>{this.props.posts.title}</h2>
				<h3>{this.props.posts.body}</h3>
				<button type="button" className="btn btn-primary">View Comment</button>
			</div>
		)
	}
});

module.exports = DisplayUserPost; 