const express = require("express");
const app = express();

//use() allows express to inject a middleware
// the order of the routes matter a lot. be careful with the ordering
// app.use("/hehe", (req, res, nxt) => {
//   console.log("in the another middleware");
//   res.send("<h1>HEHEHE</h1>");
// });

// app.use("/", (req, res, nxt) => {
//   console.log("in the middleware");
//   res.send("<h1>Hello</h1>");
// });

// ASSIGNMENT //
app.use((req, res, nxt) => {
  console.log("First Middlware");
  nxt();
});

app.use((req, res, nxt) => {
  console.log("Second Middlware");
  res.send("<p>hahahah</p>");
});

app.use("/users", (req, res, nxt) => {
  res.send("<p>In the users middleware</p>");
});

app.use("/", (req, res, nxt) => {
  res.send("<p>In the root middleware</p>");
});

/**************/
app.listen(3000);
