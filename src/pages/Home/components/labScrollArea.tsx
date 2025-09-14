'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { File } from 'lucide-react'
import { ReactNode, useEffect, useRef } from 'react'

type LabProps = {
  data: unknown[]
  label?: string
  icon?: ReactNode
  labIcon?: ReactNode
  mode?: boolean
}

export default function LabScrollArea({
  data,
  label,
  icon,
  labIcon,
  mode = false,
}: LabProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      // smooth scroll animation
      const scrollAmount = e.deltaY * 6
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    el.addEventListener('wheel', handleWheel, { passive: false })

    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  if (mode) return null
  return (
    <section className="flex flex-col w-full md:w-3xl lg:w-5xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 mb-3">
          {labIcon && labIcon}
          {label && <Label>{label}</Label>}
        </div>
        {/* <Badge variant={'secondary'}>100+</Badge> */}
        <span className="text-xs meri text-muted-foreground">+100</span>
      </div>

      <div
        ref={scrollRef}
        className="w-full flex items-center gap-3.5 mb-2.5 py-5 px-5 overflow-x-auto cursor-grab"
      >
        {data.map((_, i) => (
          <Card
            key={i}
            className="w-xs text-wrap border-0 transition-all duration-200 hover:scale-105 cursor-pointer flex-shrink-0"
          >
            <CardContent className="space-y-1 text-muted-foreground">
              {icon ?? <File size={27} />}
              <h3 className="text-lg font-normal tracking-wide">
                ReactJs Kit {i}
              </h3>
              <p className="text-xs font-light tracking-wide">
                it has pre build structure with react, javascript, tailwind, etc
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
