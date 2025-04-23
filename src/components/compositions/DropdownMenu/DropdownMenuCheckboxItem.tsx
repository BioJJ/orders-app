"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check } from "@phosphor-icons/react";

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className="flex items-center gap-2 p-1 capitalize transition duration-300 rounded cursor-pointer DropdownMenuCheckboxItem hover:bg-gray-200 hover:outline-none"
      {...props}
      ref={forwardedRef}
    >
      <DropdownMenuPrimitive.ItemIndicator forceMount>
        {props.checked === "indeterminate" && <Check />}
        {props.checked === true && <Check />}
        {props.checked === false && <div className="w-4 h-4" />}
      </DropdownMenuPrimitive.ItemIndicator>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;
