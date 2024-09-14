const mongoose =require("mongoos");


// define the person schema
const candidateSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    party:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    votes:[
        {
            user:{
                type:mongoose.Schema.types.ObjectId,
                ref:"User",
                required:true,
            },
            votedAt:{
                type:Date,
                default:Date.now(),
            }
        }
    ],
    voteCount:{
        type:Number,
        default:0,
    }
   
});

const candidate=mongoose.model("candidate",candidateSchema);
module.exports=candidate;