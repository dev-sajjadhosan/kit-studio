import TooltipBtn from '@/components/shared/tooltipBtn'
import { Button } from '@/components/ui/button'
import CreateNewDialog from '@/pages/Home/components/createNewDialog'
import { appStore } from '@/stores/appStore'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  LayoutGrid,
  Maximize,
  Minus,
  X,
  Blocks,
  Cable,
  Ellipsis,
  Gem,
  PackageCheck,
  Settings2,
  CircleAlert,
  Cog,
} from 'lucide-react'

import { toast } from 'sonner'
import LeftSidebar from '@/components/custom/leftSideBar'
import HistoryBar from '@/components/custom/historyBar'
import CustomizeModal from '@/components/custom/customizeModal'

export default function FrameBar() {
  const { setFrame } = appStore()
  return (
    <>
      <div className="flex items-center justify-between sticky top-0 left-0 px-3.5 py-2.5 dragOn">
        <div className="flex items-center gap-5 dragOff">
          <div className="flex items-center gap-2.5">
            <h3 className="text-sm meri">Kit Studio</h3>
          </div>
          <div className="flex items-center gap-1">
            <LeftSidebar />
            <HistoryBar />
          </div>
        </div>
        <div className="flex items-center gap-13 dragOff">
          <div className="flex items-center gap-1">
            <CreateNewDialog />
            {/* show modal with category with pre-build customeble kit / templetes or cretae his own and then publish import it */}
            {/* <TooltipBtn icon={<Boxes />} label="Kit Manager" /> */}
            <TooltipBtn icon={<Cog />} label="Setting" />
            <TooltipBtn
              icon={<LayoutGrid />}
              label="Templates"
              action={() => toast.warning('This is under development.')}
            />
            <MoreOptions />
          </div>
          <div className="flex items-center gap-2 ">
            <Button
              size={'icon'}
              variant={'ghost'}
              onClick={() => setFrame('Minimize')}
            >
              <Minus />
            </Button>
            <Button
              size={'icon'}
              variant={'ghost'}
              onClick={() => setFrame('Maximize')}
            >
              <Maximize />
            </Button>
            <Button
              size={'icon'}
              variant={'ghost'}
              onClick={() => setFrame('Close')}
            >
              <X />
            </Button>
          </div>
        </div>
      </div>
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

          <CustomizeModal />

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
