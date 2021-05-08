"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var userController = /** @class */ (function () {
    function userController() {
    }
    userController.getAll = function (req, res) {
        User_1.User.find()
            .then(function (result) {
            res.status(201).json({ msg: "Success get all users", data: result });
        })
            .catch(function (err) {
            res.status(500).json({ msg: "Failed get all users", data: err });
        });
    };
    userController.detailUser = function (req, res) {
        var idUser = req.userId;
        User_1.User.findById(idUser)
            .then(function (result) {
            res.status(201).json({ msg: "Detail User", data: result });
        })
            .catch(function (err) {
            res
                .status(500)
                .json({ msg: "Cannot see data user", data: err });
        });
    };
    userController.updateUser = function (req, res) {
        var idUser = req.userId;
        var _a = req.body, nama = _a.nama, email = _a.email, password = _a.password;
        var updateData = { nama: nama, email: email, password: password };
        for (var item in updateData) {
            //   if (updateData[item] === updateData['password']) {
            //      updateData[item] = bcrypt.hashSync(updateData[item], 8);
            //   }
            if (!updateData[item]) {
                delete updateData[item];
            }
        }
        User_1.User.findByIdAndUpdate(idUser, updateData, { new: true })
            .then(function (result) {
            res.status(200).json({ msg: "Success update the user", data: result });
        })
            .catch(function (err) {
            res.status(500).json({ msg: "Failed update the user" });
        });
    };
    userController.deleteUser = function (req, res) {
        var idUser = req.userId;
        User_1.User.findByIdAndDelete(idUser)
            .then(function (result) {
            res.status(201).json({ msg: "Success delete your user" });
        })
            .catch(function (err) {
            res.status(500).json({ msg: "Failed delete your user" });
        });
    };
    return userController;
}());
exports.default = userController;
