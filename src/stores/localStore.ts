import { History } from '@/types/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LocalStore {
  isNew: false | true
  leftSidebar: boolean
  showHistory: boolean

  customizeDialog: boolean
  createDialog: boolean
  pkgManager: 'npm' | 'yarn' | 'pnpm' | 'bun' | 'deno' | string
  showKitty: boolean

  history: History[]

  setShowKitty: (k: boolean) => void
  setPkgManager: (p: string) => void
  setCustomizeDialog: (v: boolean) => void
  setCreateDialog: (v: boolean) => void
  setLeftSide: (v: boolean) => void
  setShowHistory: (v: boolean) => void
  setHistory: (h: History) => void
  setIsNew: (v: boolean) => void

  toggleShowHistory: () => void
  toggleLeftSidebar: () => void
}

export const localStore = create<LocalStore>()(
  persist(
    (set) => ({
      history: [] as History[],

      isNew: true,
      leftSidebar: false,
      showHistory: false,

      customizeDialog: false,
      createDialog: false,
      pkgManager: 'npm',
      showKitty: false,

      setShowKitty: (k) => set({ showKitty: k }),
      setPkgManager: (p) => set({ pkgManager: p }),
      setCustomizeDialog: (v) => set({ customizeDialog: v }),
      setCreateDialog: (v) => set({ createDialog: v }),
      setLeftSide: (v) => set({ leftSidebar: v }),
      setShowHistory: (v) => set({ showHistory: v }),
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
