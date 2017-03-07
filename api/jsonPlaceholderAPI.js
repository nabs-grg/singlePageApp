var axios = require('axios');
var baseURL = 'https://jsonplaceholder.typicode.com/users/'

var getUsers = function(){
	return axios.get(baseURL);
}

var getUserPosts = function(userID){
	return axios.get(baseURL + userID + '/posts');
}

module.exports = {
	getUsers: getUsers,
	getUserPosts: getUserPosts
}