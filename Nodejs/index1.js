import express from 'express'
const app = express()
app.listen(5009,()=>{
    console.log("Server started")
})
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/home",(req,res)=>{
    res.send("this is home API")
})
app.get("/users",(req,res)=>{
    res.send("This is users list")
})