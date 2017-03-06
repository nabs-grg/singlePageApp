var React = require('react');
var ReactDOM = require('react-dom');

//react router
var Router   = require('react-router').Router;
var Route    = require('react-router').Route;
var IndexRoute    = require('react-router').IndexRoute;
var Link     = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

//components
var GetAllUsers = require('./components/GetAllUsers.js');
var Main = require('./components/Main.js');

//scss
require('../public/style.scss');

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={GetAllUsers} />
		</Route>
	</Router>
	),document.getElementById('app'),function(){
	console.log('react app rendered successfully onto the dom!');
});
