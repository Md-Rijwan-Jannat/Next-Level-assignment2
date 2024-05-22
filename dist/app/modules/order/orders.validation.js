"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod"); // Adjust the import path according to your project structure
// ------> Order zod schema
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string({ required_error: "Email is required" })
        .email("Invalid email address"),
    productId: zod_1.z.string({ required_error: "Product ID is required" }),
    price: zod_1.z
        .number({ required_error: "Price is required" })
        .nonnegative("Price must be a non-negative number"),
    quantity: zod_1.z
        .number({
        required_error: "Quantity is required",
    })
        .int()
        .positive("Quantity must be a positive integer"),
});
