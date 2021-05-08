"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var CheckoutSchema = new Schema({
    total: {
        type: Number,
        required: true,
    },
    product: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "Product",
    },
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "User",
    },
});
var Checkout = mongoose_1.default.model("Checkout", CheckoutSchema);
exports.Checkout = Checkout;
