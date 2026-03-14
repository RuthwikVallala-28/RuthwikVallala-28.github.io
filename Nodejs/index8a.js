import express from "express"
const app = express();
app.listen(5009,(req,res)=>{
  console.log("Server is started....")
})
app.use(express.json())
let product = [
                {id:1,product:"shoes",prize:10000},
                {id:2,product:"laptop",prize:30000},
                {id:3,product:"tv",prize:120000}
              ]
app.get("/",(req,res)=>{
      console.log("this is get request...");
      res.send(product);
})
app.get("/:id",(req,res)=>{
      console.log("this is get request...");
      let id = Number(req.params.id);
      let con
})
app.post("/",(req,res)=>{
  console.log("this is post request....");

})