const http = require("http");

const serverHandler = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hello</title></head>");
    res.write("<body>");
    res.write("Hello World");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
};

const server = http.createServer(serverHandler);

server.listen(3000);
