const path = require("path");
const express = require("express");
const router = express.Router();
const rootPath = require("../util/path");
const { adminData } = require("./admin");

router.get("/", (req, res, nxt) => {
  res.render("shop", { prods: adminData, docTitle: "My Shop" });
});

module.exports = router;
