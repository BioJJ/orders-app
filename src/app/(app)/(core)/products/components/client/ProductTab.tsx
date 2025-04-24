"use client";

import { InputField } from "@/components/Fields/InputField";

import { useFormContext } from "react-hook-form";
import { getProductsAction } from "../../specifications/product.actions";
import {
  CreateProductFormData,
  UpdateProductFormData
} from "../../specifications/product.schemas";

import { cn } from "@/utils/cn";

type PatientTabProps = {};

export function ProductTab({}: Readonly<PatientTabProps>) {
  const {
    watch,
    control,
    register,
    setValue,
    resetField,
    formState: { errors }
  } = useFormContext<CreateProductFormData | UpdateProductFormData>();
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-5 grid-rows-1 gap-4">
        <div className={cn("col-span-2")}>
          <InputField
            control={control}
            label="Nome Completo"
            required
            {...register("name")}
          />
        </div>

        <div
          className={cn("col-span-2", {
            "col-span-1": true
          })}
        >
          <InputField
            control={control}
            label="description"
            {...register("description")}
          />
        </div>

        <div
          className={cn("col-span-2", {
            "col-span-1": true
          })}
        >
          <InputField
            control={control}
            label="price"
            {...register("price")}
          />
        </div>
      </div>
    </div>
  );
}
