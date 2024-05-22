import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRouters } from "./app/modules/product/product.routes";
import { OrdersRoutes } from "./app/modules/order/order.routes";
const app = express();

// parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());

// application routes here
app.use("/api/products", ProductRouters);
app.use("/api/orders", OrdersRoutes);

app.get("/", (req, res) => {
  res.send("Product server is running!");
});

// Route error
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// global error handle
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.headersSent) {
    next();
  }
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

export default app;
