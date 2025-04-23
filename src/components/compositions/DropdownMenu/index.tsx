'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { DropdownMenuRadioItem } from './DropdownMenuRadioItem'
import { DropdownMenuCheckboxItem } from './DropdownMenuCheckboxItem'
import { DropdownMenuContent } from './DropdownMenuContent'
import { DropdownMenuTrigger } from './DropdownMenuTrigger'
import { DropdownMenuItem } from './DropdownMenuItem'

export const DropdownMenu = {
  Root: DropdownMenuPrimitive.Root,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Label: DropdownMenuPrimitive.Label,
  Item: DropdownMenuItem,
  Group: DropdownMenuPrimitive.Group,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuPrimitive.RadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Separator: DropdownMenuPrimitive.Separator,
}
