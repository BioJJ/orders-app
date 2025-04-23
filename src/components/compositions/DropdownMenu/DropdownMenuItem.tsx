'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Item
      className="flex items-center gap-2 p-1 capitalize transition duration-300 rounded cursor-pointer DropdownMenuCheckboxItem hover:bg-indigo-50 hover:outline-none"
      {...props}
      ref={forwardedRef}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  )
})

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
