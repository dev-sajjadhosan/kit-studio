import { LucideIcon } from 'lucide-react'

export type Frames = 'Close' | 'Minimize' | 'Maximize'

export interface History {
  id: number | string
  name: string
  useDate: []
  useTime: []
}

export interface MenuProps {
  id?: number
  title: string
  url?: string
  icon?: LucideIcon
  children?: MenuProps[]
}
