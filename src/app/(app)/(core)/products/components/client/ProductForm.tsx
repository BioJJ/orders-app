"use client";

import { Tabs } from "@/components/Tabs";

import { getPathnameWithoutLastParam } from "@/utils/getPathnameWithoutLastParam";
import {
  faArrowLeftLight,
  faArrowRightLight
} from "@awesome.me/kit-7140cc018b/icons/kit/custom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import {
  CreateProductFormData,
  UpdateProductFormData
} from "../../specifications/product.schemas";
import { ProductTab } from "./ProductTab";
import { SubmitFormButton } from "@/components/compositions/Button/SubmitFormButton";
import { CancelFormButton } from "@/components/compositions/Button/CancelFormButton";

type PatientFormPropsCreate = {
  handleSubmitFunction: SubmitHandler<CreateProductFormData>;
  type: "create";
};

type PatientFormPropsUpdate = {
  handleSubmitFunction: SubmitHandler<UpdateProductFormData>;
  type: "update";
};

type PatientFormProps = PatientFormPropsCreate | PatientFormPropsUpdate;

export function ProductForm({
  handleSubmitFunction
}: Readonly<PatientFormProps>) {
  const pathname = usePathname();
  const { push } = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const tabValues = ["personalData", "documents", "address"];

  function handleTabChange(value: string) {
    const index = tabValues.findIndex((item) => item === value);
    setTabValue(index);
  }

  function handleLeftTabNavigation() {
    if (tabValue !== 0) {
      setTabValue((prev) => prev - 1);
    }
  }

  function handleRightTabNavigation() {
    if (tabValue !== 2) {
      setTabValue((prev) => prev + 1);
    }
  }

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = useFormContext<CreateProductFormData | UpdateProductFormData>();

  function leavePatientForm() {
    push(getPathnameWithoutLastParam(pathname));
  }

  return (
    <form
      className="flex flex-col gap-10 px-3 overflow-y-auto"
      onSubmit={handleSubmit(handleSubmitFunction)}
    >
      <Tabs.Root value={tabValues[tabValue]} onValueChange={handleTabChange}>
        <Tabs.List>
          <Tabs.Trigger value={tabValues[0]}>Dados Produtos</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value={tabValues[0]}>
          <ProductTab />
        </Tabs.Content>
      </Tabs.Root>

      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <SubmitFormButton isSubmitting={isSubmitting} />
          <CancelFormButton
            handleCancel={leavePatientForm}
            disabled={isSubmitting}
          />
        </div>
        <div className="flex gap-4">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-interlis-buttons-800 disabled:bg-interlis-disabled-100 disabled:cursor-not-allowed group"
            disabled={tabValue === 0}
            type="button"
            onClick={handleLeftTabNavigation}
          >
            <FontAwesomeIcon
              className="text-interlis-fonts-50 group-disabled:text-interlis-icons-100"
              size="lg"
              icon={faArrowLeftLight as IconProp}
            />
          </button>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-interlis-buttons-800 disabled:bg-interlis-disabled-100 disabled:cursor-not-allowed group"
            disabled={tabValue === 2}
            type="button"
            onClick={handleRightTabNavigation}
          >
            <FontAwesomeIcon
              className="text-interlis-fonts-50 group-disabled:text-interlis-icons-100"
              size="lg"
              icon={faArrowRightLight as IconProp}
            />
          </button>
        </div>
      </div>
    </form>
  );
}
