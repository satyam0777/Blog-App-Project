

import Post from "../models/post.model.js";



export const getPosts =async (req,res)=>{
    const posts =await Post.find()
    res.status(200).json(posts)
}

//this time try to find a single item 
export const getPost =async (req,res)=>{
    const post =await Post.findOne({slug:req.params.slug}) // this name is exectly same the req :/slug
    res.status(200).json(post)
}
console.log("now createpost start")
// export const createPost =async (req,res)=>{
//     const newPost = new Post(req.body);

//     const post = await newPost.save();
//     // res.statu(200).json(post)
//     res.status(201).json({ message: "Post created successfully" });

export const createPost = async (req, res) => {
  try {
    const { title, slug, content } = req.body;

    // Check if slug already exists
    const existingPost = await Post.findOne({ slug });
    if (existingPost) {
      return res.status(400).json({ error: "Slug already exists, choose a different one." });
    }

    const newPost = new Post({ title, slug, content });
    await newPost.save();

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



