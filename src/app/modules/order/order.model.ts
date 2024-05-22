import { Schema, model } from "mongoose";
import { IOrders } from "./order.interface";

export const ordersSchema = new Schema<IOrders>({
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

export const Orders = model<IOrders>("Orders", ordersSchema);
