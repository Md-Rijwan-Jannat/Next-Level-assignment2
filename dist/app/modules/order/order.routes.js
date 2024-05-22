"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controllers_1 = require("./order.controllers");
const router = express_1.default.Router();
// ------> Create order route
router.post("/", order_controllers_1.OrderControllers.createOrder);
// ------> This a all orders and specific user email all order combine route
router.get("/", order_controllers_1.OrderControllers.getOrders);
// ------> export the router
exports.OrdersRoutes = router;
