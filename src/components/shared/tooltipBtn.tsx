import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { CircleQuestionMark } from 'lucide-react'
import { ReactNode } from 'react'

type ButtonProps = {
  icon?: ReactNode
  variant?: 'default' | 'ghost' | 'secondary' | 'outline'
  label?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'end' | 'center'
  action?: () => void
}

export default function TooltipBtn({
  icon = <CircleQuestionMark />,
  variant = 'ghost',
  label = 'write it',
  side = 'bottom',
  align,
  action,
}: ButtonProps) {
  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <Button size={'tooltip'} variant={variant} onClick={action}>
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}
