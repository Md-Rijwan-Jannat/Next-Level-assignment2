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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
// ----> create single products
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Product.create(payload);
        if (!result) {
            throw new Error("Product creation filed!");
        }
        return result;
    }
    catch (error) {
        throw new Error(error.message || "Product creation filed!");
    }
});
// ----> get all products
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Product.find();
        if (!result) {
            throw new Error("Products not found!");
        }
        return result;
    }
    catch (error) {
        throw new Error(error.message || "Products not found!");
    }
});
// ----> get single products
const getSingleProductsFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Product.findOne({ _id });
        if (!result) {
            throw new Error("Product not found!");
        }
        return result;
    }
    catch (error) {
        throw new Error(error.message || "Product not found!");
    }
});
// ----> put or update single products
const updateSingleProductsFromDB = (_id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Product.findOneAndUpdate({ _id }, updateData);
        if (!result) {
            throw new Error("Product update filed!");
        }
        return result;
    }
    catch (error) {
        throw new Error(error.message || "Product update filed!");
    }
});
// ----> delete single product from should be database
const deleteSingleProductFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Product.deleteOne({ _id });
        if (!result) {
            throw new Error("Product delete filed!");
        }
        return result;
    }
    catch (error) {
        throw new Error(error.message || "Product delete filed!");
    }
});
// ----> search products from database
const searchProductsFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Product.find({ $text: { $search: searchTerm } });
        if (!result) {
            throw new Error("Products not found!");
        }
        return result;
    }
    catch (error) {
        throw new Error(error.message || "Products not found!");
    }
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateSingleProductsFromDB,
    deleteSingleProductFromDB,
    searchProductsFromDB,
};
