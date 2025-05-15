import express from "express"
const router=express.Router()



router.get('/dashboard',(req,res)=>{
  res.status(201).send({
    message:"welcome to dashboard"
  })

})



export default router;