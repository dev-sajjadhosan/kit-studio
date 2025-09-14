import { History } from '@/types/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LocalStore {
  isNew: false | true
  leftSidebar: boolean
  showHistory: boolean

  history: History[]

  setHistory: (h: History) => void
  setIsNew: (v: boolean) => void

  toggleShowHistory: () => void
  toggleLeftSidebar: () => void
}

export const localStore = create<LocalStore>()(
  persist(
    (set) => ({
      history: [],

      isNew: true,
      leftSidebar: false,
      showHistory: false,

      setHistory: (h: History) => set((s) => ({ history: [...s.history, h] })),
      setIsNew: (v) => set({ isNew: v }),

      toggleLeftSidebar: () => set((s) => ({ leftSidebar: !s.leftSidebar })),
      toggleShowHistory: () => set((s) => ({ showHistory: !s.showHistory })),
    }),
    {
      name: 'kit-studio',
    },
  ),
)
