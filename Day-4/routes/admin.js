const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.post("/product", (req, res, nxt) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/add-product", (req, res, nxt) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

module.exports = router;
