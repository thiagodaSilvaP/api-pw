"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const Loans_1 = require("./models/Loans");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)());
app.use(routes_1.router);
new Loans_1.Loans();
app.listen(8080, () => console.log("Server is running"));
