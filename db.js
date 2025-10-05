const mysql = require("mysql2")
const connection = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "1234",
    database : "mydb"
})
connection.connect((e)=>{
    if(e)
    {
        console.log(e)
        return
    }
    console.log(`Connection successful...`)
})
module.exports = connection