const express = require("express")
const route = express.Router()
const control = require("../controls/user.js")

route.get("/",(req,res)=>{
    res.status(200).send("Welcome To Users Page...")
})
route.post("/",control.postcontrol)
route.put("/:id",control.putcontrol)
route.delete("/:id",control.deletecontrol)

module.exports = route