"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.ordersSchema = void 0;
const mongoose_1 = require("mongoose");
// ------> Order schema
exports.ordersSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    productId: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.Order = (0, mongoose_1.model)("Order", exports.ordersSchema);
