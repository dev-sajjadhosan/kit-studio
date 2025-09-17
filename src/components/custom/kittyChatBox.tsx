import TooltipBtn from '@/components/shared/tooltipBtn'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { localStore } from '@/stores/localStore'

import {
  Camera,
  CirclePlus,
  Globe,
  Paperclip,
  Pencil,
  Send,
} from 'lucide-react'

export default function KittyChatBox() {
  const { showKitty } = localStore()
  return (
    <>
      <Card
        className={`fixed left-0 right-0 mx-auto w-2xl py-2.5 duration-300 transition-all ${
          showKitty ? 'bottom-7' : '-bottom-28'
        }`}
      >
        <CardContent className="flex items-center gap-1.5">
          <ExtraOptions />
          <form className="flex items-center gap-1 w-full">
            <Input
              className="bg-transparent! border-0 tracking-wider"
              placeholder="Ask anything..."
            />
            <Button size={'sm'} variant={'ghost'}>
              Ask
              <Send />
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

function ExtraOptions() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <TooltipBtn
            label="Add File & More"
            icon={<CirclePlus />}
            variant="secondary"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52 mb-3.5 p-3">
          <p className="text-xs text-muted-foreground mb-1">
            Add Your file & more
          </p>
          <DropdownMenuSeparator />
          <label htmlFor="file">
            <input type="file" name="file" id="file" hidden />
            <DropdownMenuItem>
              <Paperclip /> File
            </DropdownMenuItem>
          </label>
          <label htmlFor="image">
            <input type="file" name="image" id="image" accept="/image" hidden />
            <DropdownMenuItem>
              {' '}
              <Camera /> Image
            </DropdownMenuItem>
          </label>
          <DropdownMenuItem>
            {' '}
            <Pencil /> Canvas
          </DropdownMenuItem>
          <DropdownMenuItem>
            {' '}
            <Globe /> Web Search
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
