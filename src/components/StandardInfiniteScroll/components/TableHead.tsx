import clsx from 'clsx'
import { ThHTMLAttributes, forwardRef } from 'react'

type TableHeadProps = {
  isEmptySpace?: boolean
  isCheckbox?: boolean
  isRowColor?: boolean
} & ThHTMLAttributes<HTMLTableCellElement>

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, isEmptySpace, isCheckbox, isRowColor, ...props }, ref) => (
    <th
      ref={ref}
      className={clsx(
        'sticky top-0 z-20 bg-interlis-tables-100 text-left border-b-2 border-b-interlis-tags-200 text-interlis-fonts-300',
        className,
        {
          'p-[14px]': !isEmptySpace && !isCheckbox,
          'w-0': isEmptySpace || isCheckbox,
          'pl-1 pt-1': isCheckbox,
          'pl-4': !isRowColor && !isCheckbox,
        },
      )}
      {...props}
    />
  ),
)

TableHead.displayName = 'TableHead'
