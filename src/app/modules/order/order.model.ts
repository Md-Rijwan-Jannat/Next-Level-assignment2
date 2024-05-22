import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

// ------> Order schema
export const ordersSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  productId: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
});

export const Order = model<IOrder>("Order", ordersSchema);
