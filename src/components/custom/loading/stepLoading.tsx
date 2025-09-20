import { Button } from '@/components/ui/button'
import { Check, Loader } from 'lucide-react'

export default function StepLoading() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 bottom-0 m-auto rounded-md flex flex-col gap-5 items-center justify-center p-15 bg-stone-900">
        <h3 className="text-sm tracking-wider">
          Working on it. Please wait some moment.
        </h3>
        <ul className="flex flex-col gap-7 list-disc">
          <li className="flex items-center gap-3">
            <Loader size={19} className="animate-spin" />
            <h3 className="text-sm text-muted-foreground tracking-wider">
              organizing packages...
            </h3>
          </li>
          <li className="flex items-center gap-3">
            <Loader size={19} className="animate-spin" />
            <h3 className="text-sm text-muted-foreground tracking-wider">
              installing packages...
            </h3>
          </li>
          <li className="flex items-center gap-3">
            <Loader size={19} className="animate-spin" />
            <h3 className="text-sm text-muted-foreground tracking-wider">
              installing necessary packages...
            </h3>
          </li>
          <li className="flex items-center gap-3">
            <Loader size={19} className="animate-spin" />
            <h3 className="text-sm text-muted-foreground tracking-wider">
              structuring folder and files...
            </h3>
          </li>
          <li className="flex items-center gap-3">
            <Loader size={19} className="animate-spin" />
            <h3 className="text-sm text-muted-foreground tracking-wider">
              organizing project
            </h3>
          </li>
          <li className="flex items-center gap-3">
            <Check size={21} />
            <h3 className="text-sm text-muted-foreground tracking-wider">
              project created successfully!
            </h3>
          </li>
        </ul>
        <div className="mt-7 flex items-center gap-3">
          <Button size={'sm'}> Open on Code Studio</Button>
          <Button size={'sm'} variant={'outline'}>
            {' '}
            Use Later
          </Button>
        </div>
      </div>
    </>
  )
}
