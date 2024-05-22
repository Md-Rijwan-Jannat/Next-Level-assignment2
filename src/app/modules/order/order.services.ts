import { IOrder } from "./order.interface";
import { Order } from "./order.model";

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

const getAllOrderFromDB = async () => {
  try {
    const result = await Order.find();
    if (!result) {
      throw new Error("Order fetched filed!");
    } else {
      return result;
    }
  } catch (error: any) {
    throw new Error(error.message || "Order fetched filed!");
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
};
