import { Button } from '@/components/ui/button'
import { appStore } from '@/stores/appStore'
import { Maximize, Minus, X } from 'lucide-react'

export default function FrameBar() {
  const { setFrame } = appStore()
  return (
    <>
      <div className="flex items-center justify-between sticky top-0 left-0 px-2.5 dragOn bg-neutral-900 z-50">
        <div className="flex items-center gap-2.5">
          <h3 className="text-sm meri">Kit Studio</h3>
        </div>
        <div className="flex items-center gap-2 dragOff">
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
    </>
  )
}
