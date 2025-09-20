import TooltipBtn from '@/components/shared/tooltipBtn'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { PackagePlus, PackageSearch, Store, Trash2 } from 'lucide-react'
import { useState } from 'react'

export default function FindPackageDialog() {
  const [search, setSearch] = useState('')
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant={'secondary'}>
            {' '}
            <PackageSearch /> Find Pkg
          </Button>
        </DialogTrigger>
        <DialogContent className="p-13">
          <div className="flex items-center gap-3">
            <Input
              placeholder="Find your package..."
              className="bg-transparent"
              onChange={(p) => setSearch(p.target.value)}
            />
            <Button>
              <PackageSearch /> Find Pkg
            </Button>
          </div>
          <div
            className={` ${
              search.length > 0 ? 'block' : 'hidden'
            } transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-muted-foreground tracking-wide">
                Your Search Result 10+
              </h3>
              <Button size={'sm'} onClick={() => setSearch('')}>
                <Trash2 /> Clear
              </Button>
            </div>

            <ul className="flex flex-col gap-3 overflow-y-scroll h-[23rem]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-5 bg-secondary py-3 px-5 text-sm text-muted-foreground rounded-md"
                >
                  <Avatar className="w-7">
                    <AvatarImage src="/electron-vite.animate.svg" />
                    <AvatarFallback>KT</AvatarFallback>
                  </Avatar>
                  <h3 className="">
                    Your Search Package is{' '}
                    <span className="text-primary font-semibold">{search}</span>
                  </h3>
                  <div className="flex items-center ml-auto gap-2">
                    <TooltipBtn
                      label="Use"
                      icon={<PackagePlus />}
                      variant="default"
                    />
                    <TooltipBtn label="Collect" icon={<Store />} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
