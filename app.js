const express = require("express")
const app = express()
const mysql = require("mysql2")
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    database : "mydb"
})
connection.connect((err)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log("connected successfully")
    const q = `create table students(id int,name varchar(20));`
    connection.execute(q,(e)=>{
        if(e){
            console.log(e)
            connection.end
            return
        }
        console.log(`table created`)
    })
})
app.get("/",(req,res)=>{
    res.send(`Hello world`);
})
app.listen(2001,()=>{console.log(`Server is Listening...`)})