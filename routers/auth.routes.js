"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controllers_1 = __importDefault(require("../controllers/auth.controllers"));
var Auth = /** @class */ (function () {
    function Auth() {
        this.router = express_1.Router();
        this.register();
        this.login();
    }
    Auth.prototype.register = function () {
        this.router.post('/register', auth_controllers_1.default.register);
    };
    Auth.prototype.login = function () {
        this.router.post('/login', auth_controllers_1.default.login);
    };
    return Auth;
}());
exports.default = new Auth().router;
