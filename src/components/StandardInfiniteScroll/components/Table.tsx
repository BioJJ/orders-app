import { HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import { SpinningSvg } from '@/components/compositions/SpinningSvg'

type TableProps = {
  isLoading?: boolean
  inViewRef?: (node?: Element | null | undefined) => void
  hasScroll?: boolean
} & HTMLAttributes<HTMLTableElement>

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    { className, isLoading = false, inViewRef, hasScroll = true, ...props },
    ref,
  ) => (
    <div
      className={clsx('w-full', {
        'overflow-auto scrollbar-webkit': hasScroll,
      })}
    >
      <table
        ref={ref}
        className={clsx('w-full border-collapse', className)}
        {...props}
      />
      {isLoading && (
        <div className="flex justify-center py-4" ref={inViewRef}>
          <SpinningSvg size={7} />
        </div>
      )}
    </div>
  ),
)

Table.displayName = 'Table'
