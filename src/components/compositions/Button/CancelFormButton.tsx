"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { buttonVariant } from "@/components/compositions/Button/ButtonRoot";
import { buttonTextVariant } from "../Button/ButtonText";
import { ComponentProps } from "react";

type CancelFormButtonProps = {
  handleCancel: () => void;
  title?: string;
  icon?: IconProp;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  id?: string;
  className?: string;
  size?: keyof typeof buttonVariant.variants.size;
  fontSize?: keyof typeof buttonTextVariant.variants.size;
  variant?: "cancel" | "outline";
} & ComponentProps<"button">;

export function CancelFormButton({
  handleCancel,
  title = "Cancelar",
  icon,
  type = "button",
  disabled = false,
  id = "cancel-form",
  variant = "cancel",
  className,
  size,
  fontSize,
  ref,
  ...props
}: Readonly<CancelFormButtonProps>) {
  return (
    <Button.Root
      {...props}
      id={id}
      ref={ref}
      variant={variant}
      size={size || "sm"}
      type={type}
      onClick={handleCancel}
      disabled={disabled}
      className={className}
    >
      {icon && <FontAwesomeIcon icon={icon as IconProp} />}
      <Button.Text size={fontSize} text={title} />
    </Button.Root>
  );
}
