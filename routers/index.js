"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_routes_1 = __importDefault(require("./auth.routes"));
var userRoutes_1 = __importDefault(require("./userRoutes"));
var productRoute_1 = __importDefault(require("./productRoute"));
var ShopcartRoute_1 = __importDefault(require("./ShopcartRoute"));
var checkoutRoutes_1 = __importDefault(require("./checkoutRoutes"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.Router();
        this.routes();
        this.auth();
        this.user();
        this.product();
        this.Shopcart();
        this.Checkout();
    }
    Routes.prototype.routes = function () {
        this.router.get("/", function (req, res) {
            res.status(200).json({ msg: "Welcome.. login to Wanhenda Pecah Belah" });
        });
    };
    Routes.prototype.auth = function () {
        this.router.use("", auth_routes_1.default);
    };
    Routes.prototype.user = function () {
        this.router.use("/user", userRoutes_1.default);
    };
    Routes.prototype.product = function () {
        this.router.use("/product", productRoute_1.default);
    };
    Routes.prototype.Shopcart = function () {
        this.router.use("/Shopcart", ShopcartRoute_1.default);
    };
    Routes.prototype.Checkout = function () {
        this.router.use("/checkout", checkoutRoutes_1.default);
    };
    return Routes;
}());
exports.default = new Routes().router;
