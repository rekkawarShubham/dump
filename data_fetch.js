var http = require("http");
const fetch = require('node-fetch');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
 }).listen(4000);
 
 async function getUserData(name){
     let res= await fetch(`https://api.github.com/users/${name}`);
     let data =await res.json();
     if(data.message == "Not Found"){
        console.log("Invalid username");
         return false;
     }
     else{ 
         console.log(data);
         console.log("Above data is of user --->" + name);
         return true;
     }
 }
 getUserData("rekkawarShubham");
 console.log('Server running at http://127.0.0.1:4000/');