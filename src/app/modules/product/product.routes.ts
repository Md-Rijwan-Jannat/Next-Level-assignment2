import express from "express";
import { ProductControllers } from "./product.controllers";
const router = express.Router();

router.post("/", ProductControllers.createProduct);

router.get("/", ProductControllers.getAllProducts);

export const ProductRouters = router;
