import { History } from '@/types/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LocalStore {
  isNew: false | true
  leftSidebar: boolean
  showHistory: boolean
  dialogKitTab: number
  customizeDialog: boolean
  pkgManager: 'npm' | 'yarn' | 'pnpm' | 'bun' | 'deno' | string
  showKitty: boolean

  history: History[]

  setShowKitty: (k: boolean) => void
  setPkgManager: (p: string) => void
  setCustomizeDialog: (v: boolean) => void
  setLeftSide: (v: boolean) => void
  setShowHistory: (v: boolean) => void
  setHistory: (h: History) => void
  setIsNew: (v: boolean) => void
  setDialogKitTab: (v: number) => void

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
      dialogKitTab: 0,
      customizeDialog: false,
      pkgManager: 'npm',
      showKitty: false,

      setShowKitty: (k) => set({ showKitty: k }),
      setPkgManager: (p) => set({ pkgManager: p }),
      setCustomizeDialog: (v) => set({ customizeDialog: v }),
      setLeftSide: (v) => set({ leftSidebar: v }),
      setShowHistory: (v) => set({ showHistory: v }),
      setHistory: (h: History) => set((s) => ({ history: [...s.history, h] })),
      setIsNew: (v) => set({ isNew: v }),
      setDialogKitTab: (v) => set({ dialogKitTab: v }),

      toggleLeftSidebar: () => set((s) => ({ leftSidebar: !s.leftSidebar })),
      toggleShowHistory: () => set((s) => ({ showHistory: !s.showHistory })),
    }),
    {
      name: 'kit-studio',
    },
  ),
)
