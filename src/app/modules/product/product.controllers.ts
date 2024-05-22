import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import { productValidationSchema } from "./product.validation";

// ------> Create a single products controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await req.body;
    const productValidateUsingZod = productValidationSchema.parse(product); // ---> product validate using zod
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
      message: error.message || "Product creation failed!",
      error,
    });
  }
};

// ------> Combine the get all products and search products controller because Endpoint is required
const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    console.log(req.query);

    let result;
    if (searchTerm) {
      result = await ProductServices.searchProductsFromDB(searchTerm as string);
    } else {
      result = await ProductServices.getAllProductsFromDB();
    }

    if (result.length == 0) {
      res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Products fetching filed!",
      error,
    });
  }
};

// ------> Get single product controller
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

// ------> Update single product controller
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    await ProductServices.updateSingleProductsFromDB(productId, updateData);

    res.status(202).json({
      success: true,
      message: "Product updated successfully!",
      data: updateData,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || "Product updated failed!",
      error,
    });
  }
};

// ------> Delete single product controller
const deleteSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await ProductServices.deleteSingleProductFromDB(
      productId as string,
    );
    if (result.acknowledged === true && result.deletedCount === 1) {
      res.status(202).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    } else {
      throw new Error("Product not found!");
    }
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message || "Product delete failed!",
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
