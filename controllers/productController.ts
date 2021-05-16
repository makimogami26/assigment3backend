import {User} from '../models/User'
import {Product} from '../models/product'
import {Request,Response,NextFunction} from 'express'
import { Shopcart } from '../models/Shopcart'


class productController {
  constructor(){

  }

  static addproduct (req : Request, res : Response){
    const newProduct = {
      nama : req.body.nama,
      id : req.params.id,
      description : req.body.description,
      price : req.body.price,
      imageUrl : req.body.imageUrl,
    }
    Product.create(newProduct)
    .then((createProduct) => {
      res.status(201).json({msg: "product berhasil dibuat", data:createProduct})
    })
    .catch((err) => {
      res.status(500).json({msg:err})
    })
  }

  static async getproduct (req : Request, res : Response) {
    const findProduct = await Product.find({})
    res.status(200).json({data:findProduct})
  }
}
export default productController;