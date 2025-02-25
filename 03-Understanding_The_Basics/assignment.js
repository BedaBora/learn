/*
Assignment tasks:
1. spin up a node server on port 3000
2. handle 2 routes: 
    '/' - return some greetings text
    '/users' - returns a list of dummy users
3. add a form with a 'username' <input/> to the '/' page and submit a post request to
    '/create-user' upon a button click
4. add the '/create-user' route and parse the incomming data and simply log it to console
*/


const http = require("http")
const users = ['Alpha', 'Romeo', 'Zeta']

const userhandler = (req, res) => {
    const url = req.url;
    const method = req.method
    if(url === '/'){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Welcome to the world of Alan Wake</title></head>")
        res.write("<body>")
        res.write("<h1>Assignment 1</h1>")
        res.write("<form method='post' action='/create-user'><input type='text' name='username' placeholder='Enter name'/></br><button type='submit'>Submit</button>")
        res.write("<body>")
        res.write("</html>")
        res.end();
    }else if(url === '/users'){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Welcome to the world of Alan Wake</title></head>")
        res.write("<body>")
        const userList = users.map(user => `<li>${user}</li>`).join("")
        res.write(`<ul>${userList}</ul>`)
        res.write("<body>")
        res.write("</html>")
        res.end();
    }else if(url === '/create-user' && method==='POST'){
        const body = [];
        req.on("data", (chunk)=>{
            body.push(chunk)
        })
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            users.push(parsedBody.split("=")[1])
        })
        res.statusCode = 302;
        res.setHeader("Location", "/users");
        res.end()
    }
}

const server = http.createServer(userhandler)


server.listen(3000)