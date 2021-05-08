"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AuthJwt_1 = __importDefault(require("../middlewares/AuthJwt"));
var express_1 = require("express");
var shopcartController_1 = __importDefault(require("../controllers/shopcartController"));
var ShopCartRoute = /** @class */ (function () {
    function ShopCartRoute() {
        this.router = express_1.Router();
        this.addToCart();
        this.updateCart();
        this.getAllCart();
        this.deleteCart();
    }
    ShopCartRoute.prototype.addToCart = function () {
        this.router.post('/add/:product_id', AuthJwt_1.default.authentication, shopcartController_1.default.addToCart);
    };
    ShopCartRoute.prototype.updateCart = function () {
        this.router.post('/update', shopcartController_1.default.updateCart);
    };
    ShopCartRoute.prototype.getAllCart = function () {
        this.router.get('/', shopcartController_1.default.getAllCart);
    };
    ShopCartRoute.prototype.deleteCart = function () {
        this.router.delete('/delete', shopcartController_1.default.deleteCart);
    };
    return ShopCartRoute;
}());
exports.default = new ShopCartRoute().router;
