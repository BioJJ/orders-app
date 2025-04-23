import { faArrowUpArrowDownLight } from '@awesome.me/kit-7140cc018b/icons/kit/custom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export const CustomTableHeader = (title: string) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-interlis-text-100">{title}</span>
      {/* <FontAwesomeIcon
        className="text-interlis-text-100"
        icon={faArrowUpArrowDownLight as IconProp}
      /> */}
    </div>
  )
}
