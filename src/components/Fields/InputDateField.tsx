import { Control } from 'react-hook-form'
import { FormErrorMessage } from '../FormErrorMessage'
import { InputDatePicker } from '../Inputs/InputDatepicker'
import { ElementRef, forwardRef } from 'react'
import { Input as InputPrimitive } from '../compositions/Input'
import { cn } from '@/utils'
import { dayjs } from '@/utils/dayjs'

type InputFieldProps = {
  control: Control<any>
  name: string
  label: string
  error: boolean
  errorMessage?: string
  required?: boolean
  className?: string
  customOnChange?: (date?: Date | string) => void
  maxDate?: string
  future?: boolean
  disabled?: boolean
}

const dateFormated = (date: dayjs.Dayjs) => date.format('YYYY-MM-DD')

/**
 * @deprecated Use Select from InputDateFieldP instead. Currently on testing.
 * @see {@link InputDateFieldP }
 */
export const InputDateField = forwardRef<
  ElementRef<typeof InputPrimitive.Element>,
  InputFieldProps
>(
  (
    {
      control,
      name,
      label,
      error,
      errorMessage,
      className,
      customOnChange,
      required = false,
      future,
      disabled,
      maxDate,
    },
    _,
  ) => {
    const date = dayjs().tz()
    maxDate = !future ? dateFormated(date) : undefined
    const minDate = future ? dateFormated(date.add(1, 'day')) : undefined

    return (
      <div className={cn('flex flex-col w-full gap-1', className)}>
        <label
          htmlFor={name}
          className="text-sm font-bold text-interlis-fonts-300"
        >
          {label}
          {required && <span className="text-interlis-fonts-200"> * </span>}
        </label>
        <InputDatePicker
          id={name}
          control={control}
          name={name}
          minDate={minDate}
          maxDate={maxDate}
          placeholder="dd/mm/aaaa"
          variant={error ? 'error' : undefined}
          customOnChange={customOnChange}
          disabled={disabled}
          lang="pt-BR"
        />
        {errorMessage && <FormErrorMessage message={errorMessage} />}
      </div>
    )
  },
)

InputDateField.displayName = 'InputDateField'
