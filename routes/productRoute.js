import express from 'express'
import { isAdmin, requiredSignIn } from '../middlewares/authMiddleware.js'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from '../controllers/productController.js'
import formidable from "express-formidable";
const router = express.Router()
//create-product
router.post('/create-product',requiredSignIn,isAdmin,formidable(),createProductController)
//get-product
router.get('/get-product',getProductController)

//route-singleProduct
router.get('/get-single-product/:slug',getSingleProductController)

//get-photoRoute
router.get('/get-photo/:pid',productPhotoController)

//delete-productRoute
router.delete('/delete-product/:pid',deleteProductController)

//update-productRoute
router.put('/update-product/:pid',requiredSignIn,isAdmin,formidable(),updateProductController)

export default router