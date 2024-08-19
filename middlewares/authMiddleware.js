import JWT from "jsonwebtoken";
import userModel from "../model/userModel.js";
//protected routes token based
export const requiredSignIn= async(req,res,next)=>{
    
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode  //we have to decrypt it here bcz we have already encrypted it here 
        next();
    } catch (error) {
        console.log(error);
    }
}

//admin acess routes
export const isAdmin = async(req,res,next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(400).send({
                success: false,
                message : 'unauthorize access'
            })
        }
        next()
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            message:'unauthorized admin'
        })
    }
}