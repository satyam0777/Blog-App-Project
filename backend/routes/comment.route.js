import express from "express"

const router= express.Router()

router.get("/",(req,res)=>{
    res.status(200).send("hello postman, i am comment.route.js")
})


export default router