import { Request, Response } from "express";
import { Product } from "./product.model";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = await req.body();
    const result = await Product.create(productData);
    res.status(202).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || "Product can't created successfully",
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
};
