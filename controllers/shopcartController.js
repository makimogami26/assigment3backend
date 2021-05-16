"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Shopcart_1 = require("../models/Shopcart");
var product_1 = require("../models/product");
var ShopcartController = /** @class */ (function () {
    function ShopcartController() {
    }
    ShopcartController.addToCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, product_id, createCart, findProduct, productprice, total, nama, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.Id;
                        product_id = req.params.product_id;
                        return [4 /*yield*/, product_1.Product.findById(product_id)];
                    case 1:
                        findProduct = _a.sent();
                        productprice = findProduct.price;
                        total = req.body.jumlah * productprice;
                        nama = findProduct.nama;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        console.log(productprice);
                        return [4 /*yield*/, Shopcart_1.Shopcart.create({
                                productnama: nama,
                                jumlah: req.body.jumlah,
                                total: total,
                            })];
                    case 3:
                        createCart = _a.sent();
                        res
                            .status(201)
                            .json({
                            msg: "Selamat Anda sudah berbelanja",
                            data: createCart,
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        res
                            .status(200)
                            .json({
                            msg: err_1
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ShopcartController.updateCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, jumlah, product_id, id, selectCart, selectProduct, new_jumlah, new_totalPrice, cartAndUpdate, updateProduct, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body.product_id, jumlah = _a.jumlah, product_id = _a.product_id;
                        id = req.params.id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, Shopcart_1.Shopcart.findById(id)];
                    case 2:
                        selectCart = _b.sent();
                        return [4 /*yield*/, product_1.Product.findById(product_id)];
                    case 3:
                        selectProduct = _b.sent();
                        new_jumlah = parseInt(jumlah) + selectCart.jumlah;
                        new_totalPrice = selectCart.total + selectProduct.price * parseInt(jumlah);
                        return [4 /*yield*/, Shopcart_1.Shopcart.findByIdAndUpdate(id, { jumlah: new_jumlah, total: new_totalPrice }, { new: true })];
                    case 4:
                        cartAndUpdate = _b.sent();
                        return [4 /*yield*/, product_1.Product.findByIdAndUpdate(product_id)];
                    case 5:
                        updateProduct = _b.sent();
                        res
                            .status(200)
                            .json({
                            message: "product berhasil di updated",
                            data: cartAndUpdate,
                        });
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ShopcartController.getAllCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var findAllCart, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Shopcart_1.Shopcart.find({}).select("total_price")];
                    case 1:
                        findAllCart = _a.sent();
                        console.log(findAllCart.length);
                        for (i = 0; i < findAllCart.length; i++) { }
                        res.status(200).json(findAllCart);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopcartController.deleteCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, jumlah, product_id, deleteCart, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, jumlah = _a.jumlah, product_id = _a.product_id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Shopcart_1.Shopcart.findByIdAndDelete(id)];
                    case 2:
                        deleteCart = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ShopcartController;
}());
exports.default = ShopcartController;
