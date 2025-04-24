import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as TabsPrimitives from '@radix-ui/react-tabs'

export const TabsRoot = forwardRef<
  ElementRef<typeof TabsPrimitives.Root>,
  ComponentPropsWithoutRef<typeof TabsPrimitives.Root>
>(({ children, ...props }, forwardedRef) => {
  return (
    <TabsPrimitives.Root className="h-full" {...props} ref={forwardedRef}>
      {children}
    </TabsPrimitives.Root>
  )
})

TabsRoot.displayName = TabsPrimitives.Root.displayName
