import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import { productValidationSchema } from "./product.validation";

// ----> create a single products
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = await req.body;
    const productValidateUsingZod = productValidationSchema.parse(productData); // ---> product validate using zod
    const result = await ProductServices.createProductIntoDB(
      productValidateUsingZod,
    );
    res.status(202).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Product creation failed",
      error,
    });
  }
};

// ----> get all products
const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductsFromDB();
  res.status(202).json({
    success: true,
    message: "Products fetched successfully!",
    data: result,
  });
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
};
