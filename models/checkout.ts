import mongoose, { Mongoose } from "mongoose";
const Schema = mongoose.Schema;

interface ICheckout {
  total: number;
  product: string[];
  user: string[];
}

interface CheckoutDocument extends mongoose.Document {
  total: number;
  product: string[];
  user: string[];
}

interface CheckoutModelInterface extends mongoose.Model<CheckoutDocument> {
  build(attr: ICheckout): CheckoutDocument;
}

const CheckoutSchema = new Schema({
  total: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Checkout = mongoose.model<CheckoutDocument, CheckoutModelInterface>(
  "Checkout",
  CheckoutSchema
);

export { Checkout };
