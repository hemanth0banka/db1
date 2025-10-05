let connection = require("../util/db.js")
let getcontrol = (req,res)=>{
    let query = `select name from students;`
    connection.execute(query,(e,result)=>{
        if(e)
        {
            console.log(e)
            res.status(500).send(e)
        }
        res.status(200).send(result)
    })
}
let postcontrol = (req,res)=>{
    let {name} = req.body
    let query = `insert into students(name) values(?);`
    connection.execute(query,[name],(e)=>{
        if(e)
        {
            connection.end()
            res.status(500).send(e)
        }
        res.status(201).send("user Registered...")
    })
}
let putcontrol = (req,res)=>{
    let id = req.params.id
    let {name} = req.body
    let query = `update students set name = ? where id = ?;`
    connection.execute(query,[name,id],(e,r)=>{
        if(e)
        {
            connection.end()
            res.status(500).send(e)
        }
        if(r.affectedRows==0)
        {
            res.status(400).send(`User not Found`)
        }
        res.status(200).send("user details are updated ...")
    })
}
let deletecontrol = (req,res)=>{
    let id = req.params.id
    let query = `delete from students where id = ?;`
    connection.execute(query,[id],(e,r)=>{
        if(e)
        {
            connection.end()
            res.status(500).send(e)
        }
        else if(r.affectedRows==0)
        {
            res.status(400).send(`User not Found`)
        }
        res.status(200).send("user Removed !")
    })
}

module.exports = {postcontrol,putcontrol,deletecontrol,getcontrol}