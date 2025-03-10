import express from "express"

const router= express.Router()

router.get("/",(req,res)=>{
    res.status(200).send("hello postman, i am user.route.js")
})


export default router