import { Shopcart } from "../models/Shopcart";
import { Product } from "../models/product";
import { Request, Response, NextFunction } from "express";
import { parse } from "dotenv/types";

class ShopcartController {
  constructor() {}

  static async addToCart(req: Request, res: Response) {
    const userId = (<any>req).Id;
    const product_id = req.params.product_id;
    let createCart
    const findProduct = await Product.findById(product_id);
      const productprice = findProduct.price;
      const total = req.body.jumlah * productprice
      const nama = findProduct.nama
    try {
      console.log(productprice);

      createCart = await Shopcart.create({
        productnama: nama,
        jumlah: req.body.jumlah,
        total: total,
      })
      res
        .status(201)
        .json({
          msg: "Selamat Anda sudah berbelanja",
          data: createCart,
        });
    } catch (err){
      res
        .status(200)
        .json({
          msg: err
        });
    }
  }

  static async updateCart(req: Request, res: Response) {
    const { jumlah, product_id } = req.body.product_id;
    const { id } = req.params;

    try {
      const selectCart = await Shopcart.findById(id);
      const selectProduct = await Product.findById(product_id);
      const new_jumlah = parseInt(jumlah) + selectCart.jumlah;
      const new_totalPrice =
        selectCart.total + selectProduct.price * parseInt(jumlah);
      const cartAndUpdate = await Shopcart.findByIdAndUpdate(
        id,
        { jumlah: new_jumlah, total: new_totalPrice },
        { new: true }
      );
      const updateProduct = await Product.findByIdAndUpdate(product_id);
      res
        .status(200)
        .json({
          message: "product berhasil di updated",
          data: cartAndUpdate,
        });
    } catch (error) {}
  }

  static async getAllCart(req: Request, res: Response) {
    const findAllCart = await Shopcart.find({}).select("total_price");
    console.log(findAllCart.length);

    for (let i = 0; i < findAllCart.length; i++) {}

    res.status(200).json(findAllCart);
  }

  static async deleteCart(req: Request, res: Response) {
    const { id } = req.params;
    const { jumlah, product_id } = req.body;

    try {
      const deleteCart = await Shopcart.findByIdAndDelete(id);
    } catch (error) {}
  }
}

export default ShopcartController;
