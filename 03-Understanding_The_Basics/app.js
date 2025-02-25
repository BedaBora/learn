// We use the http module to create a server
// require takes path to a file or a node module name
// local file name usually starts witl ./
const http  = require("http")
// const fs = require("fs");

//the module exported is locked and cannot be further modified
const routes = require("./routes")

/*
function reqListener(req, res){
    // console.log(req);
    // console.log(req.url, req.method, req.headers);

    //sending response
    const url = req.url;
    const method = req.method
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write("<html>")
        res.write("<head><title>Enter Message</title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></body>")
        res.write("</html>")
        return res.end() // after res.end() we dont want to add any content to the response
    }
    if(url === '/message' && method === 'POST'){
        //listen to data event
        // this event is triggered everytime a new chunk is ready to be read
        const body = []
        req.on('data', (chunk)=>{
            body.push(chunk)
        });
        //this event is triggerred once it is done parsing the incomming req data
        /*
        req.on('end', ()=>{
            //We will not concat all the buffer items and convert it to string (since we know we get a text)
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1]
            // the writeFileSync is a special method
            // it will block code execution until the write operation is completed
            // fs.writeFileSync('temp.txt', message)

            // preferably use the async way of writing to files
            fs.writeFile('temp.txt', message)

            console.log(parsedBody)
        })
        
        //redirect to the root route
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end()
        return req.on('end', ()=>{
            //We will not concat all the buffer items and convert it to string (since we know we get a text)
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1]
            // the writeFileSync is a special method
            // it will block code execution until the write operation is completed
            // fs.writeFileSync('temp.txt', message)

            // preferably use the async way of writing to files
            fs.writeFile('temp.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end()
            });
        });

    }
    res.setHeader('Content-Type', 'text/html')
    res.write("<html>")
    res.write("<head><title>My First page</title></head>")
    res.write("<body><h1>Hello from node.js server</h1></body>")
    res.write("</html>")
    res.end()
}
*/
//create server takes in a request listener. it is a function that listens to all requests
// we simply pass the function reference. we may also pass the an anonymous function
// const server = http.createServer(reqListener)
const server = http.createServer(routes)

// listen method will run node in a loop where node will be listening to the specified port
server.listen(3000)