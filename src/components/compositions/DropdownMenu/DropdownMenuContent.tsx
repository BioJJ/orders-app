'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className="z-50 font-semibold text-black bg-white border border-gray-200 rounded-sm radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down"
        {...props}
        ref={forwardedRef}
      >
        {children}
        {/* <DropdownMenuPrimitive.Arrow /> */}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
})

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName
