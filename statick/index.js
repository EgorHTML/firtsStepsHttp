
function getDataJsonFromServer(){
    const xml = new XMLHttpRequest()
    xml.open("get","http://localhost:8888/data.json",true)
    xml.setRequestHeader('Content-Type', 'application/json');
    xml.responseType = 'json'
    xml.addEventListener("load",(data)=>{
        console.log(xml.response)
    })
    
    xml.send() 
    
}
getDataJsonFromServer()


const subBtn = document.querySelector(".subBtn")
console.log(subBtn)

subBtn.addEventListener("click",convertData)
postDataToServer
function convertData(){
    let name = document.getElementById("POST-name").value
    let age = document.getElementById("POST-age").value
    let reqJson ={
        name,
        age
    }
    
   nullNames()
   postDataToServer(reqJson)
}


function postDataToServer(req){
    fetch('http://localhost:8888/form.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(req)
      }).then(res=>res.json())
    
}







function nullNames(){
    document.getElementById("POST-name").value = ""
    document.getElementById("POST-age").value = ""
}
