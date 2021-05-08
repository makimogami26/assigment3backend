"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (err, res) {
    var code;
    var name = err.name;
    var message;
    switch (name) {
        case "Email_Fail":
            code = 400;
            message = "Please Fiil Valid Email";
            break;
        case "Missing_Token":
            code = 401;
            message = "Unauthorized access";
            break;
        case "Forbidden_Access":
            code = 403;
            message = "You Can't Access";
            break;
        case "Email_and_Password":
            code = 404;
            message = "Invalid Username or Password";
            break;
        case "Not_Found":
            code = 404;
            message = "Page Not Found";
            break;
        case "Fail_Created":
            code = 500;
            message = "Fail Creates: Resources is not Enough";
            break;
        default:
            code = 500;
            message = "Internal Server Error";
            break;
    }
    res.status(code).json({ success: false, message: message, error: err });
};