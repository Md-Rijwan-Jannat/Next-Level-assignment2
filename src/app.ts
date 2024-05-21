import express from "express";
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

export default app;
