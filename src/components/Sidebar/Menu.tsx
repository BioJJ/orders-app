import { useSidebar } from '@/shared/context/SidebarContext'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { MenuItem } from './MenuItem'
import { cn } from '@/utils/cn'

type Menu = {
  path: string
  icon: IconDefinition
  title: string
  tag: string
  subMenus: Menu[]
  isFirstMenu: boolean
  visible: boolean
}

type MenuProps = {
  data: Menu[]
}

export function Menu({ data }: Readonly<MenuProps>) {
  const { showNested, isSidebarOpen } = useSidebar()

  return (
    <div
      className={cn('flex flex-col w-full gap-2', {
        'py-[7px]': isSidebarOpen,
      })}
    >
      {data?.map((item) => {
        const isLink = item.subMenus?.length === 0

        if (item.visible) {
          return (
            <div key={item.path}>
              <MenuItem
                path={item.path}
                icon={item.icon}
                title={item.title}
                tag={item.tag}
                isLink={isLink}
                isFirstMenu={item.isFirstMenu}
              />

              <div
                className={cn(
                  'pl-2 transition-all duration-500 overflow-hidden ease-in-out',
                  {
                    'max-h-0': !showNested[item.tag],
                    'max-h-[2000px]': showNested[item.tag],
                    hidden: !isSidebarOpen,
                  },
                )}
              >
                <Menu data={item.subMenus} />
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}
