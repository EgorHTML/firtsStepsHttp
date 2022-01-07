
const http = require("http")
const path = require("path")
const fs = require("fs")




const server = http.createServer((req,res)=>{
   
  
if (req.url ==="/") {     
        postStatickFilesToClient("index.html","text/html",res)  
}else if(req.url==="/style.css" || req.url==="/index.js"){
    postStatickFilesToClient(req.url,getContentType(req.url),res)
    // postStatickFilesToClient('data.json',"application/json",res)
    
}else if(req.url =="/data.json"){
    postStatickFilesToClient('data.json',"application/json",res)
}else{
    postStatickFilesToClient(req.url,getContentType(req.url),res)
}



}).listen(8888)


function postStatickFilesToClient(url,type,res){
    let file = path.join(__dirname+"/statick",url)
    fs.readFile(file,(err,data)=>{
        res.writeHead(200,{"Content-Type":type})
        
        res.end(data)
    })
}

function getContentType(url){
    switch(path.extname(url)){
        case ".html":
            return "text/html"
        case ".css":
            return "text/css"
        case ".js":
            return "text/javascript"
        case ".json":
            return "application/json"
        default:
            return "application/octet-stream"
    }
}