const path = require("path");
const express = require("express");
const router = express.Router();
const rootPath = require("../util/path");
const { adminData } = require("./admin");

router.get("/", (req, res, nxt) => {
  console.log(adminData);
  res.sendFile(path.join(rootPath, "views", "shop.html"));
});

module.exports = router;
