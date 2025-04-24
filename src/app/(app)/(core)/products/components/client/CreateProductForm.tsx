"use client";

import { useAuth } from "@/shared/context/AuthContextP";
import { updateErrorToast, updateSuccessToast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createProductAction } from "../../specifications/product.actions";
import {
  CreateProductFormData,
  CreateProductSchema
} from "../../specifications/product.schemas";
import { ProductForm } from "./ProductForm";
import { getPathnameWithoutLastParam } from "@/utils/getPathnameWithoutLastParam";

type CreatePatientForm = {};

export function CreateProductForm({}: Readonly<CreatePatientForm>) {
  const { session } = useAuth();
  const { push } = useRouter();
  const pathname = getPathnameWithoutLastParam(usePathname());
  const methods = useForm<CreateProductFormData>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {}
  });

  async function handleSubmitFunction(data: CreateProductFormData) {
    const toastId = toast.loading("Enviando...");

    const req = {
      name: data.name!
    };

    const res = await createProductAction(req);

    if (res.ok) {
      updateSuccessToast(toastId, res.message);
      push(pathname);
    } else {
      updateErrorToast(toastId, res.message);
    }
  }

  return (
    <FormProvider {...methods}>
      <ProductForm handleSubmitFunction={handleSubmitFunction} type="create" />
    </FormProvider>
  );
}
