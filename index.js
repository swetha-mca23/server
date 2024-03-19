const express = require("express");
const mongoose = require('mongoose');
const cors = require ('cors');
const bodyparser = require('body-parser')

const app= express();
app.use(cors());
app.use(express.json());

app.get( '/',( req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.get('/data',function(req,res){
    {Data.find().then((item)=>res.send(item))}
})

app.post('/create',function(req,res){
    Data.create(req.body).then((item)=>res.send(item))
})

app.put("/update/:id",function(req,res){
    Data.findByIdAndUpdate({_id:req.params.id},req.body,{new:"true"}).then((item)=>res.send(item))
})

app.delete("/delete/:id",function(req,res){
   
    Data.findByIdAndDelete({_id:req.params.id}).then((item)=>res.send(item))
})




app.listen(8080,()=>console.log("server started on port number 8080"))

mongoose.connect("mongodb+srv://swethak0403:swetha@cluster0.qh7gzoc.mongodb.net/database").then(()=>console.log(" MongoDB Connected"))

// create a schemes

var newSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    amount:Number
})



// model
let Data = mongoose.model('database',newSchema)

// create a data for testing

//  let data1 = new Data({
//    name:"swetha",
//    email:"swethak0403@gmail.com",
//    password:"swetha@2003",
//    amount:2000
// })
// // 
// data1.save()
