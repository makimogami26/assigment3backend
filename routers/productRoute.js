"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var productController_1 = __importDefault(require("../controllers/productController"));
var express_1 = require("express");
var productRoute = /** @class */ (function () {
    function productRoute() {
        this.router = express_1.Router();
        this.addproduct();
        this.getproduct();
    }
    productRoute.prototype.getproduct = function () {
        this.router.get('/', productController_1.default.getproduct);
    };
    productRoute.prototype.addproduct = function () {
        this.router.post('/add', productController_1.default.addproduct);
    };
    return productRoute;
}());
exports.default = new productRoute().router;
