const express = require("express")
const path = require("path")

const rootPath = require("../util/path")
const router = express.Router()

//after adding the /admin in app.js, form action modified from /product to /admin/product
// router.get("/add-product", (req, res) =>{
//     res.send(`
//         <form method='POST' action='/admin/product'>
//             <input type='text' name='title'/>
//             <button type='submit'>Add Product</button>
//         </form>    
//     `)
// })

router.get("/add-product", (req, res) =>{
    res.sendFile(path.join(rootPath, "views", "add-product.html"))
})

router.post("/product", (req, res) =>{
    console.log(req.body); // undefined since express by default does not parse the body, for that we use the body-parser module
    res.redirect("/");
})

module.exports = router 