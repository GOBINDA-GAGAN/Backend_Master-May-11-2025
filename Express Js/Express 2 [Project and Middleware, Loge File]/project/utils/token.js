import crypto from "crypto"

export const generatedToken=()=>{
  return crypto.randomBytes(16).toString("hex")
}

export const validateToken=(token)=>{
  return token.length===32;
}