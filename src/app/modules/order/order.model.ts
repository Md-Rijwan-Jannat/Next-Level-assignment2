import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

export const ordersSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
    unique: true,
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
    tye: Number,
    required: true,
    trim: true,
  },
});

export const Order = model<IOrder>("Order", ordersSchema);
