import TooltipBtn from '@/components/shared/tooltipBtn'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { localStore } from '@/stores/localStore'

export default function CustomizeModal() {
  const { customizeDialog, setCustomizeDialog } = localStore()
  return (
    <>
      <Dialog
        open={customizeDialog}
        defaultOpen
        onOpenChange={() => setCustomizeDialog(!customizeDialog)}
      >
        {/* <DialogTrigger>
          <DropdownMenuItem>
            <Columns3Cog /> Customize
          </DropdownMenuItem>
        </DialogTrigger> */}
        <DialogContent className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-muted-foreground">
              Customize your WorkPlace
            </h3>
            <TooltipBtn label="Default" />
          </div>
          <div className="mt-3 space-y-5">
            <div className="flex flex-col gap-2">
              <Label>Home Page</Label>
              <div className="grid grid-cols-2 gap-3">
                <Card className="px-1 py-3 rounded-md">
                  <CardContent>
                    <h3 className="text-sm">Popular Section</h3>
                  </CardContent>
                </Card>
                <Card className="px-1 py-3 rounded-md">
                  <CardContent>
                    <h3 className="text-sm">Popular Section</h3>
                  </CardContent>
                </Card>
                <Card className="px-1 py-3 rounded-md">
                  <CardContent>
                    <h3 className="text-sm">Popular Section</h3>
                  </CardContent>
                </Card>
                <Card className="px-1 py-3 rounded-md">
                  <CardContent>
                    <h3 className="text-sm">Popular Section</h3>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <Label>Left Sidebar Position</Label>
                <div className="flex items-center gap-3">
                  <Button>Left</Button>
                  <Button>Right</Button>
                  <Button>Floating</Button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label>History bar Position</Label>
                <div className="flex items-center gap-3">
                  <Button>Left</Button>
                  <Button>Right</Button>
                  <Button>Floating</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Themes</Label>
              <div className="flex items-center gap-3">
                <Button>Light</Button>
                <Button>Dark</Button>
                <Button>Gradient</Button>
                <Button>System</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
