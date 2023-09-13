const http = require("http");

const users = ["user1", "user2", "user3"];

const assignHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body>");
    res.write("<p>Hello</p>");
    res.write("<form action='/createUsers' method='POST'>");
    res.write("<input type='text' name='username'/>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/createUsers" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      users.push(parsedBody.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      res.end();
    });
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body>");
    res.write("<ul>");
    for (let user of users) {
      res.write(`<li>${user}</li>`);
    }
    res.write("</ul>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }
};
const server = http.createServer(assignHandler);
server.listen(3000);
