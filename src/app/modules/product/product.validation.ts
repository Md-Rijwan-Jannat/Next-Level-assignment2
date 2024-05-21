import { z } from "zod";

export const variantValidationSchema = z.object({
  type: z.string().nonempty({ message: "Variant type is required" }),
  value: z.string().nonempty({ message: "Variant value is required" }),
});

export const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .min(0, { message: "Quantity must be a non-negative number" }),
  inStock: z.boolean(),
});

export const productValidationSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  price: z.number().min(0, { message: "Price must be a non-negative number" }),
  category: z.string().nonempty({ message: "Category is required" }),
  tags: z.array(z.string().nonempty(), {
    message: "Tags must be an array of non-empty strings",
  }),
  variants: z
    .array(variantValidationSchema)
    .nonempty({ message: "Variants are required" }),
  inventory: inventoryValidationSchema,
});
