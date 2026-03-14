import express from "express"
const app = express();
app.listen(5009);
app.get("/",(req,res)=>{
    const user = {
        name:"abisai",
        age:22,
    };
    res.json(user)
});