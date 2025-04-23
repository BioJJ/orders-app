import clsx from 'clsx'
import { TdHTMLAttributes, forwardRef } from 'react'

type TableCellProps = {
  isEmptySpace?: boolean
  isCheckbox?: boolean
  isRowColor?: boolean
} & TdHTMLAttributes<HTMLTableCellElement>

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, isEmptySpace, isCheckbox, isRowColor, ...props }, ref) => (
    <td
      ref={ref}
      className={clsx(
        'relative text-xs text-interlis-fonts-300',
        {
          'px-[14px] py-[9px]': !isEmptySpace && !isCheckbox,
          'pl-1 pt-1 w-0': isCheckbox,
          'pl-4': !isRowColor && !isCheckbox,
        },
        className,
      )}
      {...props}
    />
  ),
)

TableCell.displayName = 'TableCell'
