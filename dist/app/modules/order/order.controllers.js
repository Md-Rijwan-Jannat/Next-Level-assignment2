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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_services_1 = require("./order.services");
// ------> Create a order controller
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield req.body;
        const result = yield order_services_1.OrderServices.createOrderIntoDB(order);
        res.status(202).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Order created failed!",
            error,
        });
    }
});
// ------> Get all order and specific customer all orders controller because Endpoint is required
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        console.log(req.query);
        let result;
        if (email) {
            result = yield order_services_1.OrderServices.getCustomerAllOrdersFromDB(email);
        }
        else {
            result = yield order_services_1.OrderServices.getAllOrderFromDB();
        }
        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Orders not found!",
            });
        }
        res.status(200).json({
            success: true,
            message: email
                ? "Orders fetched successfully for user email!"
                : "Orders fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Orders fetch failed!",
            error,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getOrders,
};
