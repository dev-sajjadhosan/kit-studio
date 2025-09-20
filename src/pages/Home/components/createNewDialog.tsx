import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

import { NextDialogMenus } from '@/lib/menuItems'
import { localStore } from '@/stores/localStore'
import { MenuProps } from '@/types/types'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CreateNewDialog() {
  const [idx, setIdx] = useState<MenuProps | undefined>()
  const { createDialog, setCreateDialog } = localStore()
  return (
    <>
      <Dialog
        open={createDialog}
        onOpenChange={() => setCreateDialog(!createDialog)}
      >
        <DialogContent>
          <div className="flex flex-col items-center justify-center gap-5">
            <DialogTitle className="text-xl text-muted-foreground text-center">
              Pick your Choice
            </DialogTitle>

            <div className="grid grid-cols-3 gap-2.5 items-center justify-center ">
              {NextDialogMenus.map((n, i) => (
                <Button
                  key={i}
                  variant={n.id === idx?.id ? 'secondary' : 'outline'}
                  onClick={() => setIdx(n)}
                >
                  {n.icon && <n.icon />}
                  {n.title}
                </Button>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-5 flex-col w-full">
              <ul className="grid grid-cols-2 gap-3 w-full">
                {NextDialogMenus.find((f) => f.id === idx?.id)?.children?.map(
                  (n, i) => (
                    <Link to={`/create-kit/${n.url}`}>
                      <li
                        key={i}
                        className={`flex items-center gap-2 text-xs [&_svg]:size-4  px-5 py-3 rounded-sm font-normal text-muted-foreground tracking-wider capitalize cursor-pointer ${
                          2 !== idx?.id
                            ? 'hover:bg-zinc-800 border border-zinc-800'
                            : 'hover:bg-stone-800 border border-stone-800'
                        }`}
                      >
                        {n.icon && <n.icon />}
                        {n.title}
                        <Badge
                          className="text-xs text-muted-foreground"
                          variant={'outline'}
                        >
                          {idx?.title}
                        </Badge>
                      </li>
                    </Link>
                  ),
                )}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
