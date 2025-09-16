import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Columns3Cog } from 'lucide-react'

export default function CustomizeModal() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <DropdownMenuItem>
            <Columns3Cog /> Customize
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
