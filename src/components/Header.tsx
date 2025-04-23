"use client";

import { Profile } from './Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/pro-light-svg-icons'
import { BreadCrumb } from './BreadCrumb'

export function Header() {
  return (
    <div className="flex items-center justify-between h-10 gap-3">
      <div className="flex items-center gap-1">
        <BreadCrumb
          homeElement="Dashboard"
          listClasses={
            'cursor-pointer hover:underline mx-2 inline-block text-sm text-interlis-fonts-100 whitespace-nowrap'
          }
          activeClasses="!text-interlis-fonts-200"
          separator={<FontAwesomeIcon icon={faAngleRight as IconProp} />}
        />
      </div>
      <Profile />
    </div>
  )
}
