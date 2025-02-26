/*
Assignment tasks:
1. Create npm project
2. Create an express.js app which funnels the requests through 2 middleware functins that log something to the console
and reutrns on response
3. Handle requests to "/" and "/users" such that each request had only one middleware that does something
*/

const express = require('express')
const path = require("path")

const app = express()

// app.use((req, res, next) =>{
//     console.log("This is the first middleware");
//     next();
// })

// app.use((req, res, next) =>{
//     console.log("This is the second middleware");
//     res.send("<p>THis is the response from second middleware</p>");
// })

/*
app.use("/users", (req, res) =>{
    res.send(`
        <head>
            <title>Users</title>
        </head>
        <body>
            <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        </body>
    `)
})

app.use("/", (req, res) =>{
    res.send(`
        <head>
            <title>Hello</title>
        </head>
        <body>
            <h1>Go to '/users' to get a list of soem users</h1>
        </body>
    `)
})
*/

/*
Assignment tasks:
1. Create npm project
2. Create an express.js app which serves 2 html files for "/" and "/users"
3. Handle requests to "/" and "/users" such that each request had only one middleware that does something
*/

app.use(express.static(path.join(__dirname, "public")))
app.get("/users", (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "assignment", "users.html"))
})

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "assignment", "index.html"))
})

app.listen(3001)