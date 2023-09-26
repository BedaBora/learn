const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

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

//******** ASSIGNMENT *********//
// app.use((req, res, nxt) => {
//   console.log("First Middlware");
//   nxt();
// });

// app.use((req, res, nxt) => {
//   console.log("Second Middlware");
//   res.send("<p>hahahah</p>");
// });

// app.use("/users", (req, res, nxt) => {
//   res.send("<p>In the users middleware</p>");
// });

// app.use("/", (req, res, nxt) => {
//   res.send("<p>In the root middleware</p>");
// });

/*****************************/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res, nxt) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
