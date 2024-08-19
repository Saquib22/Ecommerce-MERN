import express from 'express';
import {registerController,loginController,testController} from '../controllers/authController.js'
import { isAdmin, requiredSignIn } from '../middlewares/authMiddleware.js';
//route object
const router = express.Router()

// performing routing

//Register  || Method POST
router.post('/register',registerController)

// Login || Method POST
router.post('/login',loginController)

// test-route || Method get
router.get('/test',requiredSignIn,isAdmin,testController)

// protected route - auth

router.get('/user-auth',requiredSignIn,(req,res) =>{
    res.status(200).send({ok:true})
})

export default router