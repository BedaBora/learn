//Some important core modules

//http
//https
//fs
//path
//os

// import http from "http";
const http = require("http");
const routes = require("./routes");
const server = http.createServer(routes.handler);
server.listen(4001);
