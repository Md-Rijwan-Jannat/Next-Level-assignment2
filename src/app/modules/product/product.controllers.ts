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
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(202).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: true,
      message: error.message || "Products fetched filed!",
      error,
    });
  }
};

// ----> get single products
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductsFromDB(productId);
    res.status(202).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || "Product fetched filed!",
      error,
    });
  }
};

// ----> update single product
const updateSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const updateData = req.body;
  console.log({ updateData });

  try {
    const result = await ProductServices.updateSingleProductsFromDB(
      productId,
      updateData,
    );
    console.log({ result });

    res.status(202).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || "Product updated failed!",
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
};
