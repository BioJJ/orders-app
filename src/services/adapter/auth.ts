import { SignInDto } from "../models/auth.types";
import axiosInstance from "@/utils/axiosInstance";

export const signIn = async (body: SignInDto) => {
  const response = await axiosInstance.post("/login", body);
  return response.data;
};
