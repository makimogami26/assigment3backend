"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routers/index"));
var db_1 = __importDefault(require("./configs/db"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.plugin();
        this.route();
        this.cors();
        dotenv_1.default.config();
    }
    App.prototype.cors = function () {
        this.app.use(cors_1.default());
    };
    App.prototype.plugin = function () {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        db_1.default();
    };
    App.prototype.route = function () {
        this.app.use(index_1.default);
    };
    return App;
}());
// const port = process.env.PORT
var app = new App().app;
app.listen(process.env.PORT, function () { return console.log("Server running on port http://localhost:" + process.env.PORT); });
