"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faSliders } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useEffect,
  useState
} from "react";
import { Control, Controller } from "react-hook-form";
import { VariantProps } from "tailwind-variants";
import { Input as InputPrimitive } from "../Input";
import { inputVariants } from "../Input/InputElement";
import { inputContainerVariants } from "../Input/InputRoot";

interface InputFormProps
  extends VariantProps<typeof inputContainerVariants>,
    ComponentPropsWithoutRef<typeof InputPrimitive.Element> {
  isSearch?: boolean;
  hasFilter?: boolean;
  name: string;
  control?: Control<any>;
  handleFilterClick?: () => void;
  containerSize?: "sm" | "md" | "lg";
  mode?: keyof typeof inputVariants.variants.mode;
  mask?: any;
  unmask?: boolean;
  scale?: number;
  thousandsSeparator?: string;
  radix?: string;
  mapToRadix?: string[];
  normalizeZeros?: boolean;
  padFractionalZeros?: boolean;
  onAccept?: (value: any) => void;
  overwrite?: boolean;
}

export const InputForm = forwardRef<
  ElementRef<typeof InputPrimitive.Element>,
  InputFormProps
>(
  (
    {
      variant,
      isSearch = false,
      hasFilter = false,
      handleFilterClick,
      containerSize,
      onChange,
      name,
      control,
      mask,
      unmask,
      scale = 2,
      thousandsSeparator,
      radix,
      mapToRadix,
      normalizeZeros,
      padFractionalZeros,
      onAccept,
      overwrite,
      mode,
      ...props
    },
    forwardedRef
  ) => {
    function handleClick() {
      if (handleFilterClick) handleFilterClick();
    }

    return (
      <Controller
        name={name}
        defaultValue={""}
        control={control}
        render={({ fieldState: { error } }) => {
          return (
            <InputPrimitive.Root
              variant={
                variant === "disabled" ? "disabled" : error ? "error" : variant
              }
              containerSize={containerSize}
            >
              {isSearch && (
                <div className="flex items-center justify-center pl-3 text-interlis-inputs-400">
                  <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
                </div>
              )}

              {hasFilter && (
                <div
                  className="flex items-center justify-center pr-3 cursor-pointer text-interlis-inputs-400"
                  onClick={handleClick}
                >
                  <FontAwesomeIcon icon={faSliders as IconProp} />
                </div>
              )}
            </InputPrimitive.Root>
          );
        }}
      />
    );
  }
);

InputForm.displayName = "InputForm";

interface InputProps
  extends VariantProps<typeof inputContainerVariants>,
    ComponentPropsWithoutRef<typeof InputPrimitive.Element> {
  isSearch?: boolean;
  hasFilter?: boolean;
  handleFilterClick?: () => void;
  containerSize?: "sm" | "md" | "lg";
  resetState?: boolean;
}

export const Input = forwardRef<
  ElementRef<typeof InputPrimitive.Element>,
  InputProps
>(
  (
    {
      variant,
      isSearch = false,
      hasFilter = false,
      containerSize,
      resetState,
      ...props
    },
    forwardedRef
  ) => {
    const [alterColor, setAlterColor] = useState(false);

    useEffect(() => {
      if (resetState) {
        setAlterColor(false);
      }
    }, [resetState]);

    return (
      <InputPrimitive.Root
        variant={variant}
        containerSize={containerSize}
        style={{
          width: "100%",
          position: "relative",
          paddingRight: "60px"
        }}
      >
        {isSearch && (
          <div className="flex items-center justify-center pl-3 text-interlis-inputs-400">
            <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
          </div>
        )}
        <InputPrimitive.Element {...props} ref={forwardedRef} />
      </InputPrimitive.Root>
    );
  }
);

Input.displayName = "Input";
