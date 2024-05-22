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
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
// ------> Create order service
const createOrderIntoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_model_1.Order.create(order);
        if (!result) {
            throw new Error("Order creation filed!");
        }
        else {
            return result;
        }
    }
    catch (error) {
        throw new Error(error.message || "Order creation filed!");
    }
});
// ------> Get all orders service
const getAllOrderFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_model_1.Order.find();
        if (!result) {
            throw new Error("Orders fetched filed!");
        }
        else {
            return result;
        }
    }
    catch (error) {
        throw new Error(error.message || "Orders fetched filed!");
    }
});
// ------> Get single customer all orders using email service
const getCustomerAllOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_model_1.Order.find({ email });
        if (!result) {
            throw new Error("Orders not found!");
        }
        else {
            return result;
        }
    }
    catch (error) {
        throw new Error(error.message || "Orders not found!");
    }
});
exports.OrderServices = {
    createOrderIntoDB,
    getAllOrderFromDB,
    getCustomerAllOrdersFromDB,
};
