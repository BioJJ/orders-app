import axiosInstance from "@/utils/axiosInstance";
import { Product } from "../models/product.types";

export const getProducts = async (
  token: string | undefined,
  params?: string
) => {
  const response = await axiosInstance.get(`/products`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export const postProducts = async (
  token: string | undefined,
  body: Product
) => {
  const response = await axiosInstance.post("/products", body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
