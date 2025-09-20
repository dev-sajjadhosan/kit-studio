import TooltipBtn from '@/components/shared/tooltipBtn'
import { Button } from '@/components/ui/button'
import CreateNewDialog from '@/pages/Home/components/createNewDialog'
import { appStore } from '@/stores/appStore'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  LayoutGrid,
  Maximize,
  Minus,
  X,
  Blocks,
  Ellipsis,
  Gem,
  PackageCheck,
  Settings2,
  CircleAlert,
  Cog,
  Columns3Cog,
  Bot,
  Plus,
  Command,
} from 'lucide-react'

import LeftSidebar from '@/components/custom/leftSideBar'
import HistoryBar from '@/components/custom/historyBar'
import CustomizeModal from '@/components/custom/customizeModal'
import { localStore } from '@/stores/localStore'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import ConnectDialog from '@/components/custom/connectDialog'

export default function FrameBar() {
  const { setFrame } = appStore()
  const { showKitty, setShowKitty, setCreateDialog, createDialog } =
    localStore()
  return (
    <>
      <CustomizeModal />
      <CreateNewDialog />
      {/*  */}
      <div className="flex items-center justify-between sticky top-0 left-0 px-3.5 py-2.5 dragOn z-10">
        <div className="flex items-center gap-5 dragOff">
          <div className="flex items-center gap-2.5">
            <h3 className="text-sm meri">Kit Studio</h3>
          </div>
          <div className="flex items-center gap-1">
            <LeftSidebar />
            <HistoryBar />
            <TooltipBtn
              icon={<Bot />}
              label="Kitty"
              variant={showKitty ? 'default' : 'ghost'}
              action={() => setShowKitty(!showKitty)}
            />
          </div>
        </div>
        <div className="flex items-center gap-13 dragOff">
          <div className="flex items-center gap-1">
            <Button
              size={'sm'}
              variant={'secondary'}
              onClick={() => setCreateDialog(!createDialog)}
            >
              <Plus />
              {/* Create New */}
            </Button>
            {/* show modal with category with pre-build customeble kit / templetes or cretae his own and then publish import it */}
            {/* <TooltipBtn icon={<Boxes />} label="Kit Manager" /> */}
            <Link to={'/setting'}>
              <TooltipBtn icon={<Cog />} label="Setting" />
            </Link>
            <Link to={'/templates'}>
              <TooltipBtn icon={<LayoutGrid />} label="Templates" />
            </Link>
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
  const { customizeDialog, setCustomizeDialog, pkgManager, setPkgManager } =
    localStore()
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
              <p className="text-xs capitalize">developer</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="my-3" />
          <DropdownMenuItem
            onClick={() => setCustomizeDialog(!customizeDialog)}
          >
            <Columns3Cog /> Customize
          </DropdownMenuItem>
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <PackageCheck /> Package Manager
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="p-5 w-60 mx-5">
                  <p className="text-xs text-muted-foreground mb-5">
                    Select Package Manager
                  </p>
                  {/* <Separator className="my-1" /> */}
                  <RadioGroup defaultValue={pkgManager}>
                    {[
                      {
                        label: 'npm',
                        id: '1',
                        value: 'npm',
                      },
                      {
                        label: 'yarn',
                        id: '2',
                        value: 'yarn',
                      },
                      {
                        label: 'bun',
                        id: '3',
                        value: 'bun',
                      },
                      {
                        label: 'pnpm',
                        id: '4',
                        value: 'pnpm',
                      },
                      {
                        label: 'deno',
                        id: '5',
                        value: 'deno',
                      },
                    ].map((n, i) => (
                      <div
                        className="flex items-center space-x-2 capitalize"
                        key={i}
                        onClick={() => setPkgManager(n.value)}
                      >
                        <RadioGroupItem value={n.value} id={n.id} />
                        <Label htmlFor={n.id}>{n.label} manager</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <Link to={'/model&mcp_protocol'}>
            <DropdownMenuItem>
              <Blocks /> Models & MCP Server
            </DropdownMenuItem>
          </Link>
          <Link to={'/setting'}>
            <DropdownMenuItem>
              <Settings2 /> Setting
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem asChild>
            <ConnectDialog />
          </DropdownMenuItem>
          <Separator className="my-1.5" />
          <Link to={'/what_is_new'}>
            <DropdownMenuItem>
              <Gem /> What's new
            </DropdownMenuItem>
          </Link>
          <Link to={'/kbd_shortcut'}>
            <DropdownMenuItem>
              <Command /> Keyboard Shortcut
            </DropdownMenuItem>
          </Link>
          <Link to={'/about_us'}>
            <DropdownMenuItem>
              <CircleAlert /> About us
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
