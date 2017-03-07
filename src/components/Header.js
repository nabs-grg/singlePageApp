var React = require('react');

var Header = React.createClass({
	
	render: function(){
		return(
			<div className="parent">
				<nav className="navbar navbar-default">
				  <div className="container-fluid child">
				    <div className="navbar-header grandchild">
				      <a className="navbar-brand" href="#"><img src="http://dspncdn.com/a1/media/692x/13/dc/c0/13dcc03763021d8415535eb7a9b55c86.jpg" height="50" alt="" className="logo"/><span>Single Page App</span></a>
				    </div>
				    <ul className="nav navbar-nav navbar-right">
				      <li><a href="#">Download App</a></li>
				      <li><a href="#">Team View</a></li>
				      <li><a href="#" id="select-nav">SPA Foundation</a></li>
				      <li><a href="#" id="select-img"><img src="https://ict4kids.files.wordpress.com/2013/05/mrc-2.png" id="avatar"/></a></li>
				      <li><a href="#">Narbu</a></li>
				    </ul>
				  </div>
				</nav>
			</div>	
		)
	}
});

module.exports = Header;