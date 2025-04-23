import { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={clsx('', className)} {...props} />
))

TableBody.displayName = 'TableBody'
