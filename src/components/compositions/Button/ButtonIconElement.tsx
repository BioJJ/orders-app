import { forwardRef } from 'react'

type ButtonIconProps = {
  icon: any
  className?: string
}

export const ButtonIconElement = forwardRef<any, ButtonIconProps>(
  ({ icon: Icon, className, ...props }, forwardedRef) => {
    return (
      <Icon
        {...props}
        // className={className || 'w-4 h-4 text-gray-500 fill-current'}
        ref={forwardedRef}
      />
    )
  },
)

ButtonIconElement.displayName = 'ButtonIconElement'
