"use server";

import { getProducts, postProducts } from "@/services/adapter/product";
import { cookies } from "next/headers";

export const getProductsAction = async ({ page = 1, search = "" }) => {
  const token = (await cookies()).get("app-access_token")?.value;
  const res = await getProducts(token, `?page=${page}${search}`);

  try {
    return {
      ok: true,
      data: res
    };
  } catch (err) {
    const message = (err as Error).message;
    return {
      ok: false,
      data: {},
      message
    };
  }
};

export const getInitialProductsAction = async (params?: string) => {
  const token = (await cookies()).get("app-access_token")?.value;
  console.log("token", token);
  const res = await getProducts(token, params);

  try {
    return {
      ok: true,
      data: res
    };
  } catch (err) {
    const message = (err as Error).message;
    return {
      ok: false,
      data: {},
      message
    };
  }
};

export const createProductAction = async (body: any) => {
  try {
    const token = (await cookies()).get("app-access_token")?.value;
    const data = await postProducts(token, body);

    const message = "Produto criado com sucesso!";

    return {
      ok: true,
      message,
      data
    };
  } catch (err) {
    const message = (err as Error).message;
    return {
      ok: false,
      message
    };
  }
};
