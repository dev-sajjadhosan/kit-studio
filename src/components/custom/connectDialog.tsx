import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'

import { Cable } from 'lucide-react'

export default function ConnectDialog() {
  // when use press the 'A' & click any of the option then show a details dialog box
  // if press the 'V' & click any of the option then visit the official page
  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full">
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Cable /> Connect with
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent className="p-5">
          <div className="flex flex-col text-muted-foreground">
            <h3 className="text-lg">Connect Studio with</h3>
            <p className="text-xs ml-1 capitalize">
              them to fast and easy your workflow more.
            </p>
          </div>
          <div className="mt-5 space-y-5">
            <div className="flex flex-col gap-2.5">
              <Label>Your Default Browser (only for studio)</Label>
              <div className="flex items-center gap-3">
                <Button>Chrome</Button>
                <Button>Microsoft Edge</Button>
                <Button>Brave</Button>
                <Button>Add</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <Label>Your Local Machine</Label>
              <div className="flex items-center gap-3">
                <Button>VsCode</Button>
                <Button>Cursor</Button>
                <Button>Tauri</Button>
                <Button>Add</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <Label>Connect Your Hosting & Github</Label>
              <div className="flex items-center gap-3">
                <Button>Github</Button>
                <Button>Firebase</Button>
                <Button>Vercel</Button>
                <Button>Railway</Button>
                <Button>Netlify</Button>
                <Button>Add</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <Label>Connect Your Database</Label>
              <div className="flex items-center gap-3">
                <Button>MongoDB</Button>
                <Button>Surbase</Button>
                <Button>FireStore</Button>
                <Button>Add</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
