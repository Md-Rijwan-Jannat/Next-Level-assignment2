"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./app/modules/product/product.routes");
const order_routes_1 = require("./app/modules/order/order.routes");
const app = (0, express_1.default)();
// parser middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use((0, cors_1.default)());
// application routes here
app.use("/api/products", product_routes_1.ProductRouters);
app.use("/api/orders", order_routes_1.OrdersRoutes);
app.get("/", (req, res) => {
    res.send("Product server is running!");
});
// Route error
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
// global error handle
app.use((err, req, res, next) => {
    if (err.headersSent) {
        next();
    }
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal server error",
    });
});
exports.default = app;
