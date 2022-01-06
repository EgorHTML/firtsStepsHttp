const xml = new XMLHttpRequest()
xml.open("get","http://localhost:8888",true)
xml.responseType = 'json'
xml.addEventListener("load",(data)=>{
    console.log(xml.responseText)
})
xml.setRequestHeader('Content-Type', 'application/json');
xml.send()