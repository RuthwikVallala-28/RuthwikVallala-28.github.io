import express from "express"
const app = express()
app.listen(5009)
app.get("/",(req,res)=>{
    res.send("Hello world");
});
app.get("/:id",(req,res)=>{
    const id = req.params.id;
    res.send(id)
})
app.get("/id/:id/name/:name",(req,res)=>{
    const id = req.params.id
    const name=req.params.name;
    res.send(id+name);
})