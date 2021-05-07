import mongoose, { Mongoose } from 'mongoose'
const Schema = mongoose.Schema

interface IProduct {
   id : number,
   nama: string,
   description : string,
   price : number,
   imageUrl: [
      data : Buffer,
      ContentType : String,
   ]
   }


interface ProductDocument extends mongoose.Document{
   id : number;
   nama : string,
   description : string,
   price  : number,
   imageUrl : [
      data : Buffer,
      ContentType : String,
   ]
   }


interface ProductModelInterface extends mongoose.Model<ProductDocument>{
   build(attr: IProduct): ProductDocument
}

const ProductSchema = new Schema({
   id: {
      type: Number,
      required: false
   },
   nama : {
      type: String,
      required: false
   },
   description: {
      type: String,
      required: false
   },
   price: {
      type: Number,
      required: true
   },
   imageUrl: {
      data : Buffer,
      ContentType : String,
   
   },
  
})

const Product = mongoose.model<ProductDocument, ProductModelInterface>('Product', ProductSchema)





export {Product}
