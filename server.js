var http = require("http");
http.createServer(function (request, response) {  
       response.writeHead(200, {'Content-Type': 'text/plain'});  
       response.end('Hello World in 2023 and looking fwd to 2024 and 2025 and 2026?\n');  
    }).listen(8081);  
console.log('Server running at http://127.0.0.1:8081/');  
