"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = exports.inventoryValidationSchema = exports.variantValidationSchema = void 0;
const zod_1 = require("zod");
// ------> product variants zod schema
exports.variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string({ required_error: "Variant type is required" }),
    value: zod_1.z.string({ required_error: "Variant value is required" }),
});
// ------> product inventory zod schema
exports.inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z
        .number({ required_error: "Quantity number is required" })
        .min(0, { message: "Quantity must be a non-negative number" }),
    inStock: zod_1.z.boolean(),
});
// ------> main product  zod schema
exports.productValidationSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Product name is required" }),
    description: zod_1.z.string({ required_error: "Product description is required" }),
    price: zod_1.z
        .number({ required_error: "Product price is required" })
        .min(0, { message: "Price must be a non-negative number" }),
    category: zod_1.z.string({ required_error: "Category is required" }),
    tags: zod_1.z.array(zod_1.z.string({
        required_error: "Product tags must be an array of non-empty strings",
    })),
    variants: zod_1.z
        .array(exports.variantValidationSchema)
        .nonempty({ message: "Product variants are required" }),
    inventory: exports.inventoryValidationSchema,
});
