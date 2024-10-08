import mongoose from "mongoose";
import userModel from "../model/userModel.js"
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken'
export const registerController = async (req,res) =>{
    try {
        const{name,email,password,phone,address,} = req.body;
        //validation
        if(!name){
            return res.send({message: 'Name is required'})
        }
        if(!email){
            return res.send({message:'email is required'});
        }
        if(!password){
            return res.send({message:'password is required'});
        }
        if(!phone){
            return res.send({message:'phone no is required'});
        }
        if(!address){
            return res.send({message:'address is required'});
        }
        //check the user
        const existingUser = await userModel.findOne({email:email})
        //existing user
        if(existingUser){
            return res.status(200).send({
                success : false ,
                message: 'Already Register please login'
            })
        } 
        // hashing the password
        const hashedPassword = await hashPassword(password);
        // save operation
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save()
        res.status(201).send({
          success : 'true',
          message : 'user registered successfully',
          user  
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : 'false',
            message : 'Error in registering the user',
            error
        })
    }
}

// Login Post
export const loginController = async(req,res) =>{
     try {
        const {email,password} = req.body;
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success : false,
                message : 'Invalid Email',
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message: 'invalid password'
            })
        }
        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn:"7d"});
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name : user.name,
                email: user.email,
                phone : user.phone,
                address : user.address
            },
            token, 
        })
     } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : 'error in login',
            error
        })
     }
}

//test controller
export const testController = (req,res) =>{
    res.send("protected route")
}

