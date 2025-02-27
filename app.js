const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())
app.set("view engine","ejs")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/web-forge",(req,res)=>{
    res.render("web")
})

app.get("/about",(req,res)=>{
    res.send("about")
})
app.get("/contact",(req,res)=>{
    res.send("contact")
})

app.listen(3000)