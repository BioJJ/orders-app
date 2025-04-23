import { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={clsx('z-10 relative', className)} {...props} />
))

TableHeader.displayName = 'TableHeader'
