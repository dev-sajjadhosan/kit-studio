import TooltipBtn from '@/components/shared/tooltipBtn'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { menuItems } from '@/lib/menuItems'

import { localStore } from '@/stores/localStore'
import { MenuProps } from '@/types/types'
import {
  ChevronFirst,
  ChevronLast,
  UserRoundCog,
  ChevronRight,
} from 'lucide-react'

export default function LeftSidebar() {
  const { leftSidebar, toggleLeftSidebar, setLeftSide } = localStore()
  return (
    <>
      <Drawer
        direction="left"
        open={leftSidebar}
        onOpenChange={() => setLeftSide(!leftSidebar)}
        onClose={() => setLeftSide(false)}
      >
        <DrawerTrigger>
          <TooltipBtn
            icon={leftSidebar ? <ChevronFirst /> : <ChevronLast />}
            label={leftSidebar ? 'Close' : 'View'}
            action={toggleLeftSidebar}
            variant={leftSidebar ? 'default' : 'ghost'}
            side="left"
          />
        </DrawerTrigger>
        <DrawerContent className="p-1.5 w-72!">
          <DrawerHeader className="flex flex-row items-center justify-between">
            <h3 className="meri font-medium">Kit Studio</h3>
            <DrawerClose>
              <Button variant="secondary" size={'tooltip'}>
                <ChevronFirst />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className=" flex flex-col justify-between h-full relative">
            <ul className="flex flex-col gap-1 font-medium tracking-wide capitalize overflow-y-scroll h-[28rem] lg:h-[39rem] p-3.5">
              {menuItems.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
            </ul>
            <div className="space-y-1.5">
              <Separator />
              <div className="flex items-center justify-between border-l-4 border-l-transparent hover:border-l-accent px-3 py-2 rounded-xs">
                <div className="flex items-center gap-2">
                  <Avatar className="w-7 h-7">
                    <AvatarImage
                      src="/public/electron-vite.animate.svg"
                      alt="Kit-studio"
                    />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-muted-foreground">
                    <h3 className="text-xs text-zinc-300 capitalize">
                      Mohammad Sajjad
                    </h3>
                    <p className="text-xs capitalize">creator</p>
                  </div>
                </div>
                <TooltipBtn label="User" icon={<UserRoundCog />} />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}

function SidebarItem({ item }: { item: MenuProps }) {
  return (
    <>
      {item.children ? (
        <li className="w-full">
          <details className="group" open={item.id === 2 ? true : false}>
            <summary className="flex items-center text-[12px] gap-1.5 px-3 py-2 rounded-md cursor-pointer hover:bg-secondary [&_svg]:size-4 group-open:bg-accent">
              {/* main icon */}
              {item.icon && <item.icon />}
              <span>{item.title}</span>

              {/* chevron that rotates */}
              <ChevronRight className="ml-auto transition-transform group-open:rotate-90" />
            </summary>

            <ul className="ml-5 mt-1 flex flex-col gap-1 border-l border-secondary pl-3">
              {item.children.map((child, j) =>
                child.title === 'sep' ? (
                  <Separator />
                ) : (
                  <li
                    key={j}
                    className="hover:bg-secondary text-[11px] active:scale-95 cursor-pointer duration-150 px-3 py-2 rounded-md flex items-center gap-1.5 [&_svg]:size-4"
                  >
                    {child.icon && <child.icon />}
                    <a href={child.url}>{child.title}</a>
                  </li>
                ),
              )}
            </ul>
          </details>
        </li>
      ) : (
        <li className="hover:bg-secondary text-[12px] active:scale-95 cursor-pointer duration-150 px-3 py-2 rounded-md flex items-center gap-1.5 [&_svg]:size-4">
          {item.icon && <item.icon />}
          <a href={item.url}>{item.title}</a>
        </li>
      )}
    </>
  )
}
