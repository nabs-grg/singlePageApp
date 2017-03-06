var axios = require('axios');
var baseURL = 'https://jsonplaceholder.typicode.com/users'

var GetUsers = function(){
	return axios.get(baseURL);
}

module.exports = {
	GetUsers: GetUsers
}