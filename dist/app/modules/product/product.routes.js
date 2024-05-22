"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouters = void 0;
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const router = express_1.default.Router();
// ------> Create single product
router.post("/", product_controllers_1.ProductControllers.createProduct);
// ------> Combine the get all products and search products because Endpoint is required
router.get("/", product_controllers_1.ProductControllers.getProducts);
// ------> Get single product by productId
router.get("/:productId", product_controllers_1.ProductControllers.getSingleProduct);
// ------> Update single product by productId
router.put("/:productId", product_controllers_1.ProductControllers.updateSingleProduct);
// ------> Delete single product by productId
router.delete("/:productId", product_controllers_1.ProductControllers.deleteSingleProduct);
exports.ProductRouters = router;
