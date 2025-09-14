import { Frames } from '@/types/types'
import { create } from 'zustand'

interface AppStore {
  data: number[]
  setFrame: (f: Frames) => void
}

export const appStore = create<AppStore>(() => ({
  data: [...Array(10).keys()],
  setFrame: (frame) => window.ipcRenderer.send('frame', frame),
}))
