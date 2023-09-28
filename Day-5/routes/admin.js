const path = require("path");
const express = require("express");
const router = express.Router();
const rootPath = require("../util/path");
const products = [];

router.post("/product", (req, res, nxt) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

router.get("/add-product", (req, res, nxt) => {
  res.render("add-product", { docTitle: "Add Product" });
});

exports.adminRoute = router;
exports.adminData = products;
