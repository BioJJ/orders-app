import { faPlusLight } from '@awesome.me/kit-7140cc018b/icons/kit/custom'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Button } from '.'

type RegisterPageButtonProps = {
  href: string
}

export function RegisterPageButton({
  href,
}: Readonly<RegisterPageButtonProps>) {
  return (
    <Link href={href}>
      <Button.Root
        id="register-page"
        title="Nova Solicitação"
        size="iconOnly"
        variant="primary"
      >
        <FontAwesomeIcon icon={faPlusLight as IconProp} size="1x" />
      </Button.Root>
    </Link>
  )
}
