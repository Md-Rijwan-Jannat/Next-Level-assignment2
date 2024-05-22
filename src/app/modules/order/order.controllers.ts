import { Request, Response } from "express";
import { OrderServices } from "./order.services";

// -----> Create a order controller
const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = await req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);
    res.status(202).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Order created failed!",
      error,
    });
  }
};

// -----> Get all order and specific customer all orders controller because Endpoint is required
const getOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    let result;
    if (email) {
      result = await OrderServices.getCustomerAllOrdersFromDB(email as string);
    } else {
      result = await OrderServices.getAllOrderFromDB();
    }
    res.status(202).json({
      success: true,
      message: email
        ? "Orders fetched successfully for user email!"
        : "Orders fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Orders fetched filed!!",
      error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getOrders,
};
