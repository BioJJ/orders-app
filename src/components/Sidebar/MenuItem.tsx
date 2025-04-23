'use client'

import { useSidebar } from '@/shared/context/SidebarContext'
import { faChevronDownLight } from '@awesome.me/kit-7140cc018b/icons/kit/custom'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { cn } from '@/utils/cn'

type MenuItemProps = {
  path: string
  icon: IconDefinition
  title: string
  tag: string
  isLink: boolean
  isFirstMenu: boolean
}

export function MenuItem({
  path,
  icon,
  title,
  tag,
  isLink,
  isFirstMenu,
}: Readonly<MenuItemProps>) {
  const { showNested, toggleNested, isSidebarOpen } = useSidebar()

  return (
    <>
      {isLink && (
        <Link
          href={path}
          className={cn(
            'flex items-center w-full group gap-2 px-[5px] hover:bg-[#4338CA] rounded-[40px]',
            {
              'justify-center px-[22px] py-3.5': !isSidebarOpen,
              'py-1.5 px-4': isSidebarOpen,
            },
          )}
        >
          <div className="flex items-center justify-center w-4 h-4">
            <FontAwesomeIcon
              className="group-hover:text-white text-[#4338CA]"
              size={isSidebarOpen ? 'sm' : 'lg'}
              icon={icon as IconProp}
            />
          </div>
          <span
            className={cn('group-hover:text-white text-sm', {
              inline: isSidebarOpen,
              hidden: !isSidebarOpen,
            })}
          >
            {title}
          </span>
        </Link>
      )}
      {!isLink && (
        <button
          type="button"
          key={path}
          onClick={() => toggleNested(tag, isFirstMenu)}
          className={cn(
            'flex items-center w-full group justify-between gap-1 px-[5px] hover:bg-[#4338CA] rounded-[40px]',
            {
              'justify-center px-[22px] py-3.5': !isSidebarOpen,
              'py-1.5 pl-4 pr-2': isSidebarOpen,
            },
          )}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-4 h-4">
              <FontAwesomeIcon
                className="group-hover:text-white text-[#4338CA]"
                size={isSidebarOpen ? 'sm' : 'lg'}
                icon={icon as IconProp}
              />
            </div>
            <span
              className={cn('group-hover:text-white text-sm', {
                inline: isSidebarOpen,
                hidden: !isSidebarOpen,
              })}
            >
              {title}
            </span>
          </div>
          {isSidebarOpen && (
            <FontAwesomeIcon
              className={cn('transition-all group-hover:text-white', {
                'rotate-180': showNested[tag],
              })}
              icon={faChevronDownLight as IconProp}
            />
          )}
        </button>
      )}
    </>
  )
}
