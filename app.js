const express = require("express")
const app = express()
const route = require("./routes/user.js")
const port = 2002

console.log(`Server is Running...`)
app.use(express.json())
app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.status(200).send(`<h1> Welcome to Home Page... </h1>`)
})

app.use("/users",route)

app.use((req,res)=>{
    res.status(404).send(`<h1>Page Not Found...</h1>`)
})


app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}/`)
})