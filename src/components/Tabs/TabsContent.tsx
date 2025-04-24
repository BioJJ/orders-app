import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as TabsPrimitives from '@radix-ui/react-tabs'

export const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitives.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ children, ...props }, forwardedRef) => {
  return (
    <TabsPrimitives.Content
      className="flex-1 pt-10"
      {...props}
      ref={forwardedRef}
    >
      {children}
    </TabsPrimitives.Content>
  )
})

TabsContent.displayName = TabsPrimitives.Content.displayName
