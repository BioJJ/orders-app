import { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={clsx('', className)} {...props} />
))

TableFooter.displayName = 'TableFooter'
