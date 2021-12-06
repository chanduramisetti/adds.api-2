const body=require('body-parser');
const cors=require('cors');
const createPool=require('mysql2');
const express=require('express');
const pool=createPool.createPool({
    host: "sql3.freesqldatabase.com",
        user : "sql3456011",
        password :"BrS1hTLnJM",
        database :"sql3456011",
        port: 3306
})

const app=express();
app.use(cors());
app.use(body.json());
app.get('/', (req,res) =>{
    pool.query(`select * from details`,(err,result,field)=>{
        if(err)
        return console.log(err);
        res.send(result);
    })
    
    console.log("server reached");
})

app.listen(5500, ()=>{
    console.log("Server Running");
})
