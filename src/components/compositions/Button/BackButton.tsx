'use client'

import { faArrowLeftLight } from '@awesome.me/kit-7140cc018b/icons/kit/custom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'

type BackButtonProps = {
  href?: string
  backFunction?: () => void
}

export function BackButton({ href, backFunction }: Readonly<BackButtonProps>) {
  if (href) {
    return (
      <Link href={href}>
        <FontAwesomeIcon
          icon={faArrowLeftLight as IconProp}
          size="xl"
          className="text-interlis-icons-200"
        />
      </Link>
    )
  }

  return (
    <button type="button" onClick={backFunction}>
      <FontAwesomeIcon
        icon={faArrowLeftLight as IconProp}
        size="xl"
        className="text-interlis-icons-200"
      />
    </button>
  )
}
