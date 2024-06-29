import type { StateCreator } from 'zustand'

import type { Profile } from '@/pages/api/type'

import type { MyState } from './useStore'

export interface IUserSlice {
  isOpenLoginModal: boolean
  openLoginModal: () => void
  closeLoginModal: () => void
  userProfile: Profile | null
}
export const createUserSlice: StateCreator<MyState, [], [], IUserSlice> = (
  set
) => ({
  isOpenLoginModal: false,
  openLoginModal: () => set((state) => ({ ...state, isOpenLoginModal: true })),
  closeLoginModal: () =>
    set((state) => ({ ...state, isOpenLoginModal: false })),
  userProfile: null,
})
