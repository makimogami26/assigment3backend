import mongoose, { Mongoose } from 'mongoose'
import { Type } from 'typescript'
const Schema = mongoose.Schema

interface IShopCart {
   userId : any,
   productNama : string,
   jumlah : number,
   price: number,
   }


interface ShopCartDocument extends mongoose.Document{
   total: number
   userId : any,
   productNama : string,
   jumlah : number,
   price: number,
   }


interface ShopCartModelInterface extends mongoose.Model<ShopCartDocument>{
   build(attr: IShopCart): ShopCartDocument
}

const ShopCartSchema = new Schema({
   userId: {
      type:  mongoose.Types.ObjectId,ref: "User",
   },

   total:{
      type: Number,
   },
   
   productNama: {
      type: String,
   },
   jumlah: {
      type: Number,
    
   },
   price: {
      type: Number,
      
   },
  
})

const Shopcart = mongoose.model<ShopCartDocument, ShopCartModelInterface>('ShopCart', ShopCartSchema)





export {Shopcart}

