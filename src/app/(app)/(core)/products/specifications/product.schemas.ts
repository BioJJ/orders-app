import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number().min(0, { message: "O preço deve ser um número positivo." }),
  category: z.string(),
  stockQuantity: z.number().int().nonnegative({
    message: "A quantidade em estoque deve ser um número inteiro não negativo."
  }),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const CreateProductSchema = ProductSchema;
export type CreateProductFormData = z.infer<typeof CreateProductSchema>;

export const UpdateProductSchema = ProductSchema;
export type UpdateProductFormData = z.infer<typeof UpdateProductSchema>;

export const DeleteProductSchema = z.object({
  id: z.string()
});

export type DeleteProductFormData = z.infer<typeof DeleteProductSchema>;
