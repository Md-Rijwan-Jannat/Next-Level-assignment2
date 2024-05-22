"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productSchema = exports.inventorySchema = exports.variantsSchema = void 0;
const mongoose_1 = require("mongoose");
// ------> variants schema
exports.variantsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
// ------> inventory schema
exports.inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
// ------> main schema
exports.productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    variants: {
        type: [exports.variantsSchema],
        required: true,
    },
    inventory: {
        type: exports.inventorySchema,
        required: true,
    },
});
// ------> main product model
exports.Product = (0, mongoose_1.model)("Product", exports.productSchema);
