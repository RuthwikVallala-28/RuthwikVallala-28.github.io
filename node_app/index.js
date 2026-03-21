import express from 'express'
import dotenv from 'dotenv'
import productRouter from './routes/productRoute.js'
import dbConnect from './config/db.js'
dotenv.config()
const PORT = process.env.PORT
const app = express()
app.set("view engine","ejs")
app.set("views","views")
app.use(express.urlencoded({extended:true}))
const startServer= async ()=>{
    await dbConnect()
    app.listen(PORT,()=>{
        console.log("server started 5000")
    })
}
app.use('/admin/products',productRouter)
startServer()