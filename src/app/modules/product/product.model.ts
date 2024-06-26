import { Schema, model } from "mongoose";
import { IInventory, IProduct, IVariants } from "./product.interface";

// ------> variants schema
export const variantsSchema = new Schema<IVariants>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

// ------> inventory schema
export const inventorySchema = new Schema<IInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

// ------> main schema
export const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantsSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

// ------> main product model
export const Product = model<IProduct>("Product", productSchema);
