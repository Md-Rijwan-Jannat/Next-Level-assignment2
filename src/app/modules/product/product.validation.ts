import { z } from "zod";

// ------> product variants zod schema
export const variantValidationSchema = z.object({
  type: z.string({ required_error: "Variant type is required" }),
  value: z.string({ required_error: "Variant value is required" }),
});

// ------> product inventory zod schema
export const inventoryValidationSchema = z.object({
  quantity: z
    .number({ required_error: "Quantity number is required" })
    .min(0, { message: "Quantity must be a non-negative number" }),
  inStock: z.boolean(),
});

// ------> main product zod schema
export const productValidationSchema = z.object({
  name: z.string({ required_error: "Product name is required" }),
  description: z.string({ required_error: "Product description is required" }),
  price: z
    .number({ required_error: "Product price is required" })
    .min(0, { message: "Price must be a non-negative number" }),
  category: z.string({ required_error: "Category is required" }),
  tags: z.array(
    z.string({
      required_error: "Product tags must be an array of non-empty strings",
    }),
  ),
  variants: z
    .array(variantValidationSchema)
    .nonempty({ message: "Product variants are required" }),
  inventory: inventoryValidationSchema,
});
