"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var ProductSchema = new Schema({
    id: {
        type: Number,
        required: false
    },
    nama: {
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
        data: Buffer,
        ContentType: String,
    },
});
var Product = mongoose_1.default.model('Product', ProductSchema);
exports.Product = Product;
