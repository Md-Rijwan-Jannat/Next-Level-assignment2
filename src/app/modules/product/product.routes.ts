import express from "express";
import { ProductControllers } from "./product.controllers";
const router = express.Router();

router.post("/", ProductControllers.createProduct);

// ----> Combine the get all products and search products because Endpoint is required
router.get("/", ProductControllers.getProducts);

router.get("/:productId", ProductControllers.getSingleProduct);

router.put("/:productId", ProductControllers.updateSingleProduct);

router.delete("/:productId", ProductControllers.deleteSingleProduct);

export const ProductRouters = router;
