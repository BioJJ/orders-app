import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as TabsPrimitives from '@radix-ui/react-tabs'

export const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitives.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitives.List>
>(({ children, ...props }, forwardedRef) => {
  return (
    <TabsPrimitives.List
      className="border-b min-w-0 border-[#EEEFF2] flex gap-6 px-2 overflow-x-auto"
      {...props}
      ref={forwardedRef}
    >
      {children}
    </TabsPrimitives.List>
  )
})

TabsList.displayName = TabsPrimitives.List.displayName
