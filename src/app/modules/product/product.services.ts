import { IProduct } from "./product.interface";
import { Product } from "./product.model";

// ----> create single products
const createProductIntoDB = async (payload: IProduct) => {
  try {
    const result = await Product.create(payload);
    if (!result) {
      throw new Error("Product creation filed!");
    }
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Product creation filed!");
  }
};

// ----> get all products
const getAllProductsFromDB = async () => {
  try {
    const result = await Product.find();
    if (!result) {
      throw new Error("Products not found!");
    }
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Products not found!");
  }
};

// ----> get single products
const getSingleProductsFromDB = async (_id: string) => {
  try {
    const result = await Product.findOne({ _id });
    if (!result) {
      throw new Error("Product not found!");
    }
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Product not found!");
  }
};

// ----> put or update single products
const updateSingleProductsFromDB = async (
  _id: string,
  updateData: Partial<IProduct>,
) => {
  try {
    const result = await Product.findOneAndUpdate({ _id }, updateData);
    if (!result) {
      throw new Error("Product update filed!");
    }
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Product update filed!");
  }
};

// ----> delete single product from should be database
const deleteSingleProductFromDB = async (_id: string) => {
  try {
    const result = await Product.deleteOne({ _id });
    if (!result) {
      throw new Error("Product delete filed!");
    }
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Product delete filed!");
  }
};

// ----> search products from database
const searchProductsFromDB = async (searchTerm: string) => {
  try {
    const result = await Product.find({ $text: { $search: searchTerm } });
    if (!result) {
      throw new Error("Products not found!");
    }
    return result;
  } catch (error: any) {
    throw new Error(error.message || "Products not found!");
  }
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  updateSingleProductsFromDB,
  deleteSingleProductFromDB,
  searchProductsFromDB,
};
