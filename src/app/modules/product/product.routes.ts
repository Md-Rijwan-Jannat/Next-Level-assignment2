import express from "express";
import { ProductControllers } from "./product.controllers";
const router = express.Router();

// ------> Create single product
router.post("/", ProductControllers.createProduct);

// ------> Combine the get all products and search products because Endpoint is required
router.get("/", ProductControllers.getProducts);

// ------> Get single product by productId
router.get("/:productId", ProductControllers.getSingleProduct);

// ------> Update single product by productId
router.put("/:productId", ProductControllers.updateSingleProduct);

// ------> Delete single product by productId
router.delete("/:productId", ProductControllers.deleteSingleProduct);

export const ProductRouters = router;
