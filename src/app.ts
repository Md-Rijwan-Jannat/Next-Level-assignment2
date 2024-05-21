import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRouters } from "./app/modules/product/product.routes";
const app = express();

// parser middleware
app.use(express.json());
app.use(express.text());
app.use(cors());

// application routes here
app.use("/api/products", ProductRouters);

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
