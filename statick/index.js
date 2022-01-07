const xml = new XMLHttpRequest()

xml.open("get","http://localhost:8888/data.json",true)
xml.setRequestHeader('Content-Type', 'application/json');
// xml.responseType = 'json'
xml.addEventListener("load",(data)=>{
    console.log(xml.responseText)
})

xml.send()