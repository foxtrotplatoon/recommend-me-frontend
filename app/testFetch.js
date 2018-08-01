var fetch = require('node-fetch');

// var url = 'https://reccme.herokuapp.com/oauth/token';
// var data = {"email": "testboy@test.com", "password": "testtest", "grant_type": "password"};
// const fetchData = (articleID) =>{
// return fetch(url, {
//   method: 'POST', // or 'PUT'
//   body: JSON.stringify(data), // data can be `string` or {object}!
//   headers:{
//     'Content-Type': 'application/json'
//   }
// }).then(res => {
//   res.json().then(response_json => console.log(response_json.access_token));
// })
// // .then(token => console.log(token.access_token))
// }


const url2 = 'https://reccme.herokuapp.com/users';
const userData = {"user": {"first_name": 'mike',
"last_name": 'dorsey',
"birthdate": '21/10/1988',
"email": "test@me.com",
"password": 'test123'}}

const createUser = (articleID) =>{
return fetch(url2, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(userData), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => {
  res.json().then(response_json => console.log(response_json));
})
// .then(token => console.log(token.access_token))
}
