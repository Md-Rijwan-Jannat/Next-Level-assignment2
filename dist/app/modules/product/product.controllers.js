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
exports.ProductControllers = void 0;
const product_services_1 = require("./product.services");
const product_validation_1 = require("./product.validation");
// ------> Create a single products controller
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield req.body;
        const productValidateUsingZod = product_validation_1.productValidationSchema.parse(product); // ---> product validate using zod
        const result = yield product_services_1.ProductServices.createProductIntoDB(productValidateUsingZod);
        res.status(202).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Product creation failed!",
            error,
        });
    }
});
// ------> Combine the get all products and search products controller because Endpoint is required
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        console.log(req.query);
        let result;
        if (searchTerm) {
            result = yield product_services_1.ProductServices.searchProductsFromDB(searchTerm);
        }
        else {
            result = yield product_services_1.ProductServices.getAllProductsFromDB();
        }
        if (result.length == 0) {
            res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
        res.status(200).json({
            success: true,
            message: searchTerm
                ? `Products matching search term '${searchTerm}' fetched successfully!`
                : "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Products fetching filed!",
            error,
        });
    }
});
// ------> Get single product controller
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.ProductServices.getSingleProductsFromDB(productId);
        res.status(202).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || "Product fetched filed!",
            error,
        });
    }
});
// ------> Update single product controller
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        yield product_services_1.ProductServices.updateSingleProductsFromDB(productId, updateData);
        res.status(202).json({
            success: true,
            message: "Product updated successfully!",
            data: updateData,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || "Product updated failed!",
            error,
        });
    }
});
// ------> Delete single product controller
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const result = yield product_services_1.ProductServices.deleteSingleProductFromDB(productId);
        if (result.acknowledged === true && result.deletedCount === 1) {
            res.status(202).json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
        else {
            throw new Error("Product not found!");
        }
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || "Product delete failed!",
            error,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
};
