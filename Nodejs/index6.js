import express from "express";
const app = express();
app.listen(5009,(req,res)=>{
  console.log("server started");
});
//query string
app.get("/", (req, res) => {
  res.send(req.query.id+req.query.name);
});