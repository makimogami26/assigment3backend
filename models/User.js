"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var usersSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: false
    },
});
var User = mongoose_1.default.model('Users', usersSchema);
exports.User = User;
