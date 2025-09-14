import TooltipBtn from '@/components/shared/tooltipBtn'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import CreateNewDialog from '@/pages/Home/components/createNewDialog'

import { localStore } from '@/stores/localStore'
import {
  Blocks,
  Cable,
  // Boxes,
  ChevronFirst,
  ChevronLast,
  CircleAlert,
  // Cog,
  Columns3Cog,
  Ellipsis,
  Gem,
  History,
  LayoutGrid,
  PackageCheck,
  Settings2,
} from 'lucide-react'
import { toast } from 'sonner'

export default function Header() {
  const { leftSidebar, toggleLeftSidebar, showHistory, toggleShowHistory } =
    localStore()

  return (
    <>
      <header className="flex items-center justify-between w-full my-3 px-3">
        <div className="flex items-center gap-1.5">
          <TooltipBtn
            icon={leftSidebar ? <ChevronFirst /> : <ChevronLast />}
            label={leftSidebar ? 'Close' : 'View'}
            action={toggleLeftSidebar}
            variant={leftSidebar ? 'default' : 'secondary'}
            side="right"
          />
          <TooltipBtn
            icon={<History />}
            label="History"
            variant={showHistory ? 'secondary' : 'ghost'}
            action={toggleShowHistory}
          />
        </div>
        <div className="flex items-center gap-1">
          <CreateNewDialog />
          {/* show modal with category with pre-build customeble kit / templetes or cretae his own and then publish import it */}
          {/* <TooltipBtn icon={<Boxes />} label="Kit Manager" /> */}
          {/* <TooltipBtn icon={<Cog />} label="Setting" /> */}
          <TooltipBtn
            icon={<LayoutGrid />}
            label="Templates"
            action={() => toast.warning('This is under development.')}
          />
          <MoreOptions />
        </div>
      </header>
    </>
  )
}

function MoreOptions() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <TooltipBtn icon={<Ellipsis />} label="More Options" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="m-3 w-64 p-5 border-0">
          <DropdownMenuLabel className="flex items-center gap-2.5">
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
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="my-3" />

          <DropdownMenuItem>
            {' '}
            <Columns3Cog /> Customize
          </DropdownMenuItem>
          <DropdownMenuItem>
            {' '}
            <PackageCheck /> Package Manager
          </DropdownMenuItem>
          <DropdownMenuItem>
            {' '}
            <Blocks /> Models & MCP Server
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings2 /> Setting
          </DropdownMenuItem>
          <DropdownMenuItem>
            {' '}
            <Cable /> Connect with
          </DropdownMenuItem>
          <DropdownMenuItem>
            {' '}
            <Gem /> What's new
          </DropdownMenuItem>
          <DropdownMenuItem>
            {' '}
            <CircleAlert /> About us
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
