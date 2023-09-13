//Some important core modules

//http
//https
//fs
//path
//os

// import http from "http";
const http = require("http");
const fs = require("fs");

const reqListener = (request, response) => {
  const url = request.url;
  const method = request.method;
  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>Enter Message</title></head>");
    response.write("<body>");
    response.write(
      "<form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form>"
    );
    response.write("</body>");
    response.write("</html>");
    return response.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    return request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      fs.writeFile("message.txt", parsedBody.split("=")[1], (err) => {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
      });
    });
  }
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>Hello</title></head>");
  response.write("<body>");
  response.write("Hello World");
  response.write("</body>");
  response.write("</html>");
  response.end();
};

const server = http.createServer(reqListener);
server.listen(4001);
