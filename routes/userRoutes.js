const express=require("express");
const User=require("./../models/user");
const router=express.Router();
const {jwtAuthMiddleware,generateToken}=require("./../jwt");

// POST route to add a user 

router.post("/signup",async(req,res)=>{
    try {
        const data=req.body
        
    } catch (error) {
        
    }
})