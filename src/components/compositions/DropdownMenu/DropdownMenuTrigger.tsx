'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

export const DropdownMenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Trigger
      className="cursor-pointer rounded data-[state='open']:bg-gray-200 hover:bg-gray-200 duration-300 transition"
      {...props}
      ref={forwardedRef}
    >
      {children}
    </DropdownMenuPrimitive.Trigger>
  )
})

DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName
