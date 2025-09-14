import TooltipBtn from '@/components/shared/tooltipBtn'
import { Button } from '@/components/ui/button'
import { localStore } from '@/stores/localStore'
import {
  Boxes,
  ChevronFirst,
  ChevronLast,
  Cog,
  Ellipsis,
  History,
  Plus,
} from 'lucide-react'

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
          <Button size={'sm'} variant={'secondary'}>
            {' '}
            <Plus />
            Create New
          </Button>
          {/* show modal with category with pre-build customeble kit / templetes or cretae his own and then publish import it */}
          <TooltipBtn icon={<Boxes />} label="Kit Manager" />
          <TooltipBtn icon={<Cog />} label="Setting" />
          <TooltipBtn icon={<Ellipsis />} label="More Options" />
        </div>
      </header>
    </>
  )
}
