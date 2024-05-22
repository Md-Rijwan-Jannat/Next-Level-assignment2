import { Product } from "../product/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

// ------> Create order service
const createOrderIntoDB = async (order: IOrder) => {
  try {
    const product = await Product.findById(order.productId);
    console.log(product);

    if (!product) {
      throw new Error("Product not found!");
    }

    if (order.quantity > product.inventory.quantity) {
      throw new Error("Insufficient quantity available in inventory");
    }

    const newQuantity = product.inventory.quantity - order.quantity;

    await Product.updateOne(
      { _id: order.productId },
      {
        $set: {
          "inventory.quantity": newQuantity,
          "inventory.inStock": newQuantity > 0,
        },
      },
    );

    const result = await Order.create(order);

    if (!result) {
      throw new Error("Order creation failed!");
    } else {
      return result;
    }
  } catch (error: any) {
    throw new Error(error.message || "Order creation failed!");
  }
};

// ------> Get all orders service
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

// ------> Get single customer all orders using email service
const getCustomerAllOrdersFromDB = async (email: string) => {
  try {
    const result = await Order.find({ email });
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
