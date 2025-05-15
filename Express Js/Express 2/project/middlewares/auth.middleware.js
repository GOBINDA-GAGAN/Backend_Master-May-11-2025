import { validateToken } from "../utils/token.js";


const authMiddleware=(req,res,next)=>{
  // const token= req.headers.authorization
  const token= req.headers['authorization']

if(token && validateToken(token)){
  req.user={name:"alok",id:1}
  next();
} 
else{
  res.status(401).send("missing  token")
}
  

}
export default authMiddleware;