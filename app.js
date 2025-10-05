const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 2002;
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
    console.log(`Connected Successfully.`)
    const query1 = `create table Users(id int AUTO_INCREMENT primary key,name varchar(255),email varchar(255))`;
    connection.execute(query1,(e)=>{
        if(e)
        {
            console.log(e)
            connection.end()
            return
        }
        console.log(`Users table created Successfully.`)
        const query = `create table Buses(id int AUTO_INCREMENT primary key,busNumber int,totalSeats int,availableSeats int)`
        connection.execute(query,(e)=>{
            if(e)
            {
                console.log(e)
                connection.end()
                return
            }
            console.log(`Buses table Created Successfully.`)
            const query = `create table Bookings(id int AUTO_INCREMENT primary key,seatNumber int)`
            connection.execute(query,(e)=>{
                if(e)
                {
                    console.log(e)
                    connection.end()
                    return
                }
                console.log(`Bookings table Created Successfully.`)
                const query = `create table Payments(id int AUTO_INCREMENT primary key,amountPaid int,paymentStatus varchar(255))`
                connection.execute(query,(e)=>{
                    if(e)
                    {
                        console.log(e)
                        connection.end()
                        return
                    }
                    console.log(`Payments table created successfully`)
                    connection.end(()=>{console.log(`Connection Ended...`)})
                })
            })
        })
    })
})

app.listen(port,()=>{
    console.log(`server is running ... `)
    console.log(`listening at http://localhost:${port}`)
})