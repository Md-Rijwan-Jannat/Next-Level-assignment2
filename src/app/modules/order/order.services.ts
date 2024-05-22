import { IOrder } from "./order.interface";
import { Order } from "./order.model";

// -----> Create order into database
const createOrderIntoDB = async (order: IOrder) => {
  try {
    const result = await Order.create(order);
    if (!result) {
      throw new Error("Order creation filed!");
    } else {
      return result;
    }
  } catch (error: any) {
    throw new Error(error.message || "Order creation filed!");
  }
};

// -----> Get all orders from database
const getAllOrderFromDB = async () => {
  try {
    const result = await Order.find();
    if (!result) {
      throw new Error("Orders fetched filed!");
    } else {
      return result;
    }
  } catch (error: any) {
    throw new Error(error.message || "Orders fetched filed!");
  }
};

// -----> Get single customer all orders using email from database
const getCustomerAllOrdersFromDB = async (email: string) => {
  try {
    const result = await Order.find({ $text: { $search: email } });
    if (!result) {
      throw new Error("Orders not found!");
    } else {
      return result;
    }
  } catch (error: any) {
    throw new Error(error.message || "Orders not found!");
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getCustomerAllOrdersFromDB,
};