import { z } from "zod"; // Adjust the import path according to your project structure

export const orderValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  productId: z.string({ required_error: "Product ID is required" }),
  price: z
    .number({ required_error: "Price is required" })
    .nonnegative("Price must be a non-negative number"),
  quantity: z
    .number({
      required_error: "Quantity is required",
    })
    .int()
    .positive("Quantity must be a positive integer"),
});
