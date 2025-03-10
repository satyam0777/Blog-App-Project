import {Schema} from "mongoose"
import mongoose from "mongoose"

const commentSchema = new Schema({
    user:{
            type:Schema.types.ObjectId,
            ref:"User",
            required:true,
    
        },
    post:{
            type:Schema.types.ObjectId,
            ref:"Post",
            required:true,
    
        },
    desc:{
        type:String,
        require:true,
        
    },
    img:{
        type:String,
    },
    title:{
        type:String,
        required:true,
    },
    savedPosts:{
        type:[String],
        default:[],
    },
},{ timestamps:true }
);

export default mongoose.model("Comment",commentSchema);