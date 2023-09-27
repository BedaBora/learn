const path = require("path");
const express = require("express");
const router = express.Router();
const rootPath = require("../util/path");

router.post("/product", (req, res, nxt) => {
  res.redirect("/");
});

router.get("/add-product", (req, res, nxt) => {
  res.sendFile(path.join(rootPath, "views", "add-product.html"));
});

module.exports = router;
