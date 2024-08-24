import productModel from "../model/productModel.js";
import fs from "fs";
import slugify from "slugify";

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const products = new productModel({ ...req.fields, slug: slugify(name) });  //created a copy of product
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating product",
    });
  }
};
// get product controller

export const getProductController = async(req,res) =>{
  try {
    const product = await productModel.find({}).populate('category').select('-photo').limit(12).sort({createdAt:-1})
    res.status(200).send({
      success:true,
      totalCount:product.length,
      message:'All product',
      product
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'error while getting product',
      error:error.message
    })
  }
}
// get-single-product Controller
export const getSingleProductController =async(req,res)=>{
  try {
    const product = await productModel.findOne({slug:req.params.slug}).populate('category').select('-photo');
    res.status(200).send({
      success:true,
      message:'single product fetched successfully',
      product
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'Error while fetching single product',
      error
    })
    
  }
}
//get phot-controller
export const productPhotoController =async(req,res)=>{
  try {
    const product = await productModel.findById(req.params.pid).select('photo')
    if(product.photo.data){
      res.set('content-type',product.photo.contentType)
    }
    res.status(200).send(product.photo.data)
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'error while fetching product photo',
      error
    }) 
  }
}
// delete product controller
export const deleteProductController =  async(req,res)=>{
  try {
    const product = await productModel
      .findByIdAndDelete(req.params.pid)
      .select("-photo");
    if(!product){
      res.status(404).send({
        success:false,
        message:'error that page is not found',
        product
      })
    }
    res.status(200).send({
      success:true,
      message:'product deleted successfully',
    })
  } 
  catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'error while deleting the product',
      error
    })
  }
}
// update product controller
export const updateProductController = async(req,res)=>{
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const products = await productModel.findByIdAndUpdate(req.params.pid,{ ...req.fields, slug:slugify(name) },{new:true}); //created a copy of product
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(200).send({
      success: true,
      message: "Product updated Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in updating product",
    });
  }
}
