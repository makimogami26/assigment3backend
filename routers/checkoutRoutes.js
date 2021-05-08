"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AuthJwt_1 = __importDefault(require("../middlewares/AuthJwt"));
var express_1 = require("express");
var checkoutController_1 = __importDefault(require("../controllers/checkoutController"));
var checkoutRoute = /** @class */ (function () {
    function checkoutRoute() {
        this.router = express_1.Router();
        this.Createorder();
    }
    checkoutRoute.prototype.Createorder = function () {
        this.router.post('/:userId', AuthJwt_1.default.authentication, checkoutController_1.default.createOrder);
    };
    return checkoutRoute;
}());
exports.default = new checkoutRoute().router;
