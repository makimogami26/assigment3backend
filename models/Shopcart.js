"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shopcart = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var ShopCartSchema = new Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId, ref: "User",
    },
    total: {
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
});
var Shopcart = mongoose_1.default.model('ShopCart', ShopCartSchema);
exports.Shopcart = Shopcart;
