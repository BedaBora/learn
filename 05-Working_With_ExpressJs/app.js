const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const adminRoute = require("./routes/admin")
const shopRoute = require("./routes/shop")

// first create an instance of express.
// app here can be a valid request handler
const app = express()

/*
// We can define a middleware with the use function
// it is a event handler that take in the route and some handler functions
// req is the request, res is the response, next is a function that allows the code to flow to the next middleware
app.use((req, res, next) =>{
    console.log("In the middleware")
    next() //allows the request to continue to the next middleware
});

app.use((req, res, next) =>{
    console.log("In another middleware") // this wont work if the prev middleware did not call the next() function
    res.send("<h1>lala</h1>") //return a response, headers are automatically set by express based on the content
});
*/

// We define the more specific routes before the generic route because express 
// evaluates from top to bottom. and with '/' on top, it will always display '/' route since
// all routes starts with '/'
// we dont call next() because we do not want to send more than one response. it will cause error
/*
app.use("/add-product", (req, res, next) =>{
    console.log("In the middleware")
    res.send("<h1>The 'Add Product' page</h1>")
})
*/

/*
app.use(bodyParser.urlencoded({extended: false}))

// we may omit the next parameter since we are not using it
app.use("/add-product", (req, res) =>{
    res.send(`
        <form method='POST' action='/product'>
            <input type='text' name='title'/>
            <button type='submit'>Add Product</button>
        </form>    
    `)
})

// this route is used for both post and get reqquest

// app.use("/product", (req, res, next) =>{
//     console.log(req.body); // undefined since express by default does not parse the body, for that we use the body-parser module
//     res.redirect("/");
// })

// this will only trigger for post requests
// when usign get and post methods, we may omit the ordering since they do a hard check on the routes 
app.post("/product", (req, res, next) =>{
    console.log(req.body); // undefined since express by default does not parse the body, for that we use the body-parser module
    res.redirect("/");
})

//it will route to any locations that start with '/'
app.use("/", (req, res, next) =>{
    // console.log("In the middleware")
    res.send("<h1>Hello from Express</h1>")
})

// const server = http.createServer(app)
// server.listen(3000)
*/

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public"))) //serve static files.

// app.use(adminRoute);
// app.use(shopRoute);

// any routes inside adminRoute will be prepended by /admin
// earlier /add-product becomes /admin/add-product
app.use("/admin",adminRoute); 
app.use(shopRoute);

// We add the fall back route in case the above routes do not match the request 
app.use((req, res, next)=>{
    res.status(404).send("<h1>Page not found</h1>")
})
app.listen(3000) // internally creates the server using http module and calls listen on it