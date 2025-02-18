import express  from "express";


const app = express();

app.get("/test",(req,res)=>{
    res.status(200).json({
        "message":"server is working"
    })
})

app.listen(80,()=>{

    console.log("server is running 80")

})