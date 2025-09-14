import TooltipBtn from '@/components/shared/tooltipBtn'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { localStore } from '@/stores/localStore'
import { ArrowBigLeftDash, Plus } from 'lucide-react'

export default function CreateNewDialog() {
  const { dialogKitTab, setDialogKitTab } = localStore()
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button size={'sm'} variant={'secondary'}>
            <Plus />
            Create New
          </Button>
        </DialogTrigger>
        <DialogContent
          className={` ${
            dialogKitTab === 0 ? '' : 'p-0 overflow-hidden min-w-4xl!'
          }`}
        >
          {dialogKitTab === 0 ? (
            <div className="flex flex-col items-center justify-center gap-5 h-44">
              <h3 className="text-xl text-muted-foreground text-center">
                Pick your Choice
              </h3>
              <div className="grid grid-cols-3 gap-2.5 items-center justify-center ">
                <Button
                  variant={'secondary'}
                  onClick={() => setDialogKitTab(1)}
                >
                  New Kit
                </Button>
                <Button variant={'ghost'}>Custom Kit Edit</Button>
                <Button variant={'ghost'} className="">
                  New Npm Package
                </Button>
              </div>
            </div>
          ) : (
            <KitsViews back={setDialogKitTab} />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function KitsViews({ back }: { back: (v: number) => void }) {
  return (
    <>
      <div className="flex flex-col gap-3 h-[27rem] overflow-y-scroll">
        <div className="flex flex-row items-center gap-2 sticky top-0 z-50 bg-secondary py-2 px-2">
          <TooltipBtn
            icon={<ArrowBigLeftDash />}
            label="Back"
            action={() => back(0)}
          />
          <div className="flex flex-col">
            {/* <h3 className="text-md">Kit Creator Place</h3> */}
            <p className="text-sm font-medium tracking-wider text-muted-foreground">
              Choose, Pack && Create.
            </p>
          </div>
        </div>
        <div className="mt-5 p-5">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <Label>Pick Your Framework</Label>
              <ul className="flex flex-wrap gap-3">
                <li className="flex items-center gap-1.5 hover:bg-secondary active:scale-95 px-5 py-2 rounded-md">
                  <img src="/public/electron-vite.svg" width={31} alt="" />
                  <h3 className="text-sm text-muted-foreground tracking-wider">
                    React
                  </h3>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Pick Your Framework Language</Label>
              <ul className="flex flex-wrap gap-3">
                <li className="flex items-center gap-1.5 hover:bg-secondary active:scale-95 px-5 py-2 rounded-md">
                  <img src="/public/electron-vite.svg" width={31} alt="" />
                  <h3 className="text-sm text-muted-foreground tracking-wider">
                    Javascript
                  </h3>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Pick Your Style Library</Label>
              <ul className="flex flex-wrap gap-3">
                {['custom', 'tailwindcss', 'others'].map((n, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-1.5 hover:bg-secondary active:scale-95 px-5 py-2 rounded-md"
                  >
                    <img src="/public/electron-vite.svg" width={31} alt="" />
                    <h3 className="text-sm text-muted-foreground tracking-wider capitalize">
                      {n}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Pick Your Component Library</Label>
              <ul className="flex flex-wrap gap-3">
                {['daisyui', 'shadcnUI', 'others'].map((n, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-1.5 hover:bg-secondary active:scale-95 px-5 py-2 rounded-md"
                  >
                    <img src="/public/electron-vite.svg" width={31} alt="" />
                    <h3 className="text-sm text-muted-foreground tracking-wider capitalize">
                      {n}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Pick Your Icon Library</Label>
              <ul className="flex flex-wrap gap-3">
                {['reactIcons', 'lucide', 'tabler'].map((n, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-1.5 hover:bg-secondary active:scale-95 px-5 py-2 rounded-md"
                  >
                    <img src="/public/electron-vite.svg" width={31} alt="" />
                    <h3 className="text-sm text-muted-foreground tracking-wider capitalize">
                      {n}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  )
}
