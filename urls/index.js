 const http = require ("http");
 const fs = require ("fs");
 const url = require ("url")





 const myServer =  http.createServer((req,res)=>{
    if("req.url" === "/favicon.ico") return res.end("new req from the server  /favicon.ico ");

    const log = `${Date.now()}, ${req.url}`

    const  myUrl = url.parse(req.url,true)
    console.log(myUrl)

    // passing the query parameters 
    fs.appendFile("Newlogs.txt", log, (err,data)=>{
        switch(myUrl.pathname){
        case "/home": "req from the home page"
        break;
        case "/about": 
        
        const qp =res.end("req from the about page")

        break;case "/": "404"
        break;
    }
    })
 })


 myServer.listen(3000,()=>{
    console.log("server is running")
 })