import express from "express";
import { OrderControllers } from "./order.controllers";

const router = express.Router();

// ------> Create order route
router.post("/", OrderControllers.createOrder);

// ------> This a all orders and specific user email all order combine route
router.get("/", OrderControllers.getOrders);

// ------> export the router
export const OrdersRoutes = router;
