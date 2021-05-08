"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userController_1 = __importDefault(require("../controllers/userController"));
var AuthJwt_1 = __importDefault(require("../middlewares/AuthJwt"));
var express_1 = require("express");
var userRoute = /** @class */ (function () {
    function userRoute() {
        this.router = express_1.Router();
        this.auth();
        this.getAll();
        this.detailUser();
        this.updateUser();
        this.deleteUser();
    }
    userRoute.prototype.auth = function () {
        this.router.use(AuthJwt_1.default.authentication);
    };
    userRoute.prototype.getAll = function () {
        this.router.get('/', userController_1.default.getAll);
    };
    userRoute.prototype.detailUser = function () {
        this.router.get('/detail', userController_1.default.detailUser);
    };
    userRoute.prototype.updateUser = function () {
        this.router.put('/', userController_1.default.updateUser);
    };
    userRoute.prototype.deleteUser = function () {
        this.router.delete('/', userController_1.default.deleteUser);
    };
    return userRoute;
}());
exports.default = new userRoute().router;
