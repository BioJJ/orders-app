import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as TabsPrimitives from '@radix-ui/react-tabs'

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitives.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({ children, ...props }, forwardedRef) => {
  return (
    <TabsPrimitives.Trigger
      className="border-b-4 data-[state=active]:border-b-indigo-500 data-[state=inactive]:border-b-transparent w-full py-4 font-bold text-gray-600 text-sm"
      {...props}
      ref={forwardedRef}
    >
      {children}
    </TabsPrimitives.Trigger>
  )
})

TabsTrigger.displayName = TabsPrimitives.Trigger.displayName
