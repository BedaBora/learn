const express = require("express");
const app = express();
const path = require("path");
const { adminRoute } = require("./routes/admin");
const shopRoute = require("./routes/shop");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoute);
app.use((req, res, nxt) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
