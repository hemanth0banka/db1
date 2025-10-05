const connection = require("../util/db.js")
const getControl = (req,res)=>{
    let query = `select * from buses;`
    connection.execute(query,(e,r)=>{
        if(e)
        {
            console.log(e)
            res.status(500).send(e)
        }
        res.status(200).send(r)
    })
}
const postControl = (req,res)=>{
    let {busNumber,totalSeats,availableSeats} = req.body
    let query = `insert into buses(busNumber,totalSeats,availableSeats) values(?,?,?);`
    connection.execute(query,[busNumber,totalSeats,availableSeats],(e,r)=>{
        if(e)
        {
            console.log(e)
            res.status(500).send(e)
        }
        res.status(200).send(`Bus Added`)
    })
}
const getSeatControl = (req,res)=>{
    let seats = req.params.seats
    let query = `select * from buses where availableSeats > ?;`
    connection.execute(query,[seats],(e,r)=>{
        if(e)
        {
            console.log(e)
            res.status(500).send(e)
        }
        res.status(200).send(r)
    })
}
module.exports = {getControl,postControl,getSeatControl}