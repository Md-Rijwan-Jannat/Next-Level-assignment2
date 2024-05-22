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

export const OrderServices = {
  createOrderIntoDB,
};
