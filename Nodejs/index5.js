import express from "express";
const app = express();
app.listen(5009);
app.get("/",(req,res)=>{
    res.send(req.headers.authorization);
})

