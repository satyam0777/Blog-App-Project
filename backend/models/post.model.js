import {Schema} from "mongoose"
import mongoose from "mongoose"  



const postSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true,

    },
   img:{
        type:String,
        
    },
    title:{
        type:String,
        required:true,
    },
    slug:{
        type: String, 
        required: true,
        unique: true,
    },
    desc:{
         type:String,
    },
    content:{
        type:String,
        required:true,
    },
    isFeatured:{
        type:Boolean,
        default:false,
    },
    visit:{
        type:Boolean,
        default:0,
    },
},{ timestamps:true }
);

export default mongoose.model("Post",postSchema);