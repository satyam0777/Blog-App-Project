import express from "express"
import { getPosts ,getPost ,createPost } from "../controllers/post.controller.js";


const router= express.Router()

router.get("/",getPosts);
router.get("/:slug",getPost);
console.log("createpost-->route---->controller");
router.post("/",createPost);


export default router