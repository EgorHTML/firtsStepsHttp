
const http = require("http")
const path = require("path")
const fs = require("fs")
const {Db,mySql,conn} = require("./db.js")
const axios = require("axios").default
// let db = new Db(mySql,conn)
// db.connectToDb()
// conn.query("INSERT INTO users (firstname, age) VALUES (?, ?)",["TOM",20],(err,res,meta)=>{
//     if (err) console.log(err)
//     else{
//         console.log(err)
//         console.log(res)
//         console.log(meta)
//     }

// })
// db.connectEnd()

const server = http.createServer((req,res)=>{
renderingFiles(res,req)
if(req.url ==="/form.json"){
    //
}

 




},)
const port = 8888
server.listen(port,()=>{
    console.log("сервер запущен на порту - ",port)
})


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
function renderingFiles(res,req){
    if (req.url ==="/") {     
        postStatickFilesToClient("index.html","text/html",res)  
}else if(req.url==="/style.css" || req.url==="/index.js"){
    postStatickFilesToClient(req.url,getContentType(req.url),res)
    
}else if(req.url =="/data.json"){
    postStatickFilesToClient('data.json',"application/json",res)
}else{
    postStatickFilesToClient(req.url,getContentType(req.url),res)
}
}