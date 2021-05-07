import { Checkout} from '../models/checkout'
import {Request,Response,NextFunction} from 'express'
import {User} from '../models/User'
import {Product} from '../models/product'
import { Shopcart } from '../models/Shopcart'

class checkout {
    static async createOrder(req: Request, res: Response) {
      const userId = (<any>req).UserId;
      try {
        const ShopcartId = await Shopcart.find({ users: userId });
  
        const jumlahShopCart = await Shopcart.find({ users: userId }).select(
          "jumlah"
        );
  
        const totalShopCart = await Shopcart.find({ users: userId }).select(
          "total"
        );
  
        const totalPesanan = jumlahShopCart
          .map((bill) => bill.jumlah)
          .reduce((acc, bill) => bill + acc);
  
        const totalpayment = totalShopCart
          .map((bill) => bill.total)
          .reduce((acc, bill) => bill + acc);
  
        const createCheckout = await Checkout.create({
          Shopcartitem: ShopcartId,
          pesanan : totalPesanan,
          payment : totalpayment,
          users: userId,
        });
        res
          .status(201)
          .json({ msg: "checkouts has successfully", data: createCheckout });
      } catch (error) {
        res.status(200).json({ msg: "Cannot Checkout", data: error });
      }
    }
  }
  
  export default checkout;