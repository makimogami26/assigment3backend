"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongoDB = /** @class */ (function () {
    function mongoDB() {
    }
    mongoDB.prototype.connectDB = function () {
        var pathURL = 'mongodb+srv://Dimas:rukanogi123@cluster0.txhqr.mongodb.net/test';
        var connectOption = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoose_1.default.connect(pathURL, connectOption);
        // cecking mongodb
        var db = mongoose_1.default.connection;
        db.on('error', console.error.bind(console, 'Connection error :'));
        db.once('open', function () {
            console.log('Database connected..');
        });
    };
    return mongoDB;
}());
exports.default = new mongoDB().connectDB;
