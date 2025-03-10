import express from "express"
import userRoute from './routes/user.route.js';
import postRoute from './routes/post.route.js';
import commentRoute from './routes/comment.route.js';
import connectDB from './lib/connectDB.js'
const app = express();
app.use(express.json());

// app.get("/test",(req,res)=>{
//     res.status(200).send("it works!")
// })
app.use("/users",userRoute);
app.use("/posts",postRoute);
app.use("/comments",commentRoute);


app.listen(3000,()=>{
    connectDB();
   

    console.log("Server is running")
})