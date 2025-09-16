import TooltipBtn from '@/components/shared/tooltipBtn'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { localStore } from '@/stores/localStore'
import { History } from 'lucide-react'

export default function HistoryBar() {
  const { showHistory, setShowHistory, toggleShowHistory } = localStore()
  return (
    <>
      <Drawer
        direction="left"
        open={showHistory}
        onOpenChange={() => setShowHistory(!showHistory)}
        onClose={() => setShowHistory(false)}
      >
        <DrawerTrigger>
          <TooltipBtn
            icon={<History />}
            label="History"
            variant={showHistory ? 'secondary' : 'ghost'}
            action={toggleShowHistory}
          />
        </DrawerTrigger>
        <DrawerContent className="p-2 w-80!">
          <DrawerHeader className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-medium">Your History</h3>
          </DrawerHeader>
          <div className="mt-5">
            <ul className="flex flex-col gap-2 overflow-y-scroll h-[32rem]">
              {[...Array(15).keys()].map((h, i) => (
                <li
                  key={i}
                  className="w-full px-2 py-2.5 rounded-md bg-accent text-sm flex items-center gap-1.5 duration-200 active:scale-95"
                >
                  <span className="p-1">H{h}</span>{' '}
                  <Separator orientation="vertical" className="h-10!" />
                  <div className="flex flex-col text-xs text-muted-foreground overflow-hidden">
                    <h3 className="">Project Name</h3>
                    <p className="text-nowrap text-ellipsis overflow-hidden">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni aliquam est explicabo accusamus quas. Minus?
                    </p>
                  </div>
                  <Separator orientation="vertical" className="h-10!" />
                  <TooltipBtn label="Option" />
                </li>
              ))}
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
