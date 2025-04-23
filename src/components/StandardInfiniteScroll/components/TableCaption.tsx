import { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={clsx('', className)} {...props} />
))

TableCaption.displayName = 'TableCaption'
