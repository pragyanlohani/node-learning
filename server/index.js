const http = require ("http");
const fs = require ("fs")

const server = http.createServer((req,res)=>{
    const log = `${Date.now()}:req is made on the server \n ${req.url}`
    fs.appendFile("log.txt",log, (err,data)=>{
      
    })
    // making the switch case and defing the comming urls
 switch(req.url){
    case "/home" : res.end("hi from the home page ") ;
    break;
    case "/about" :res.end("hi from the about page ");
    break;
    case "/" :res.end("404 no optionis makde ")
    break;
 }

})



server.listen(3000, ()=>{
    console.log("serever is ruuning")
})