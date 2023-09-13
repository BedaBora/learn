//Some important core modules

//http
//https
//fs
//path
//os

// import http from "http";
const http = require("http");

const reqListener = (request, response) => {
  console.log(request.url, request.method, request.headers);
  response.setHeader("Content-Type", "text/html");
  response.write(
    "<html><head><title>Hello</title></head><body>Helllo World</body></html>"
  );
  response.end();
};

const server = http.createServer(reqListener);
server.listen(4001);
