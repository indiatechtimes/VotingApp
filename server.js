const express =require("express");
const app=express();
require("dotenv").config();

const bodyParser= require("body-parser");
app.use(bodyParser.json());

const port=process.env.PORT;

app.listen(port,()=>{
    console.log("listening on port ");
})