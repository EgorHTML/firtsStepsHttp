const mySql = require("mysql2")
let conn = mySql.createConnection({
    host:"localhost",
    user:"root",
    password: "1593007k",
    database:"usersdb"
})
class Db{
    constructor(mySql,conn){
        this.mySql = mySql
        this.conn = conn
        
    }
connectToDb(){
 
    return conn.connect((err)=>{
        if (err) console.log(err)
        else{
            console.log("удачно")
        }
    })
}
connectEnd(){
    conn.end((err)=>{
        if (err) console.log(err)
        else{
            console.log("завершено")
        }
    })
}
}
module.exports = {mySql,Db,conn}