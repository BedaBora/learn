const express = require("express")
const path = require("path")

const rootPath = require("../util/path")
const router = express.Router()

// router.get("/", (req, res, next) =>{
//     // console.log("In the middleware")
//     res.send("<h1>Hello from Express</h1>")
// })

router.get("/", (req, res, next) =>{
    res.sendFile(path.join(rootPath, "views", "shop.html"))
})

module.exports = router