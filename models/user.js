const mongoose =require("mongoos");


// define the person schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,

    },
    mobile:{
        type:String,

    },
    address:{
        type:String,
        required:true,
    },
    adharCardNumber:{
        type:String,
        required:true,
        unquie:true,
    },
    password:{
        required:true,
        type:String

    },
    roll:{
        type:String,
        enum:["voter","admin"],
        default:"voter",
    },
    isVoted:{
        type:Boolean,
        default:false,
    }
});

const User=mongoose.model("User",userSchema);
module.exports=User;