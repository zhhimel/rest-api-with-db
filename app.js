const express=require("express");
const cors=require("cors")
const app=express();
const userRoutes=require("./route/user.routes");
require("./Config/db")
app.use(cors());
app.use("/user",userRoutes);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/",(req,res)=>{
    res.sendFile(__dirname+'/./views/index.html');
})
app.use((req,res,next)=>{
    res.status(500).json({
        message:"Route not found"
    });
})
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"Server Down"
    })
})
module.exports=app;