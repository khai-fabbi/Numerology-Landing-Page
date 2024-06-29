import { create } from 'zustand'

import type { ICommonSlice } from './createCommonSlice'
import { createCommonSlice } from './createCommonSlice'
import type { IUserSlice } from './createUserSlice'
import { createUserSlice } from './createUserSlice'

export type MyState = ICommonSlice & IUserSlice

export const useStore = create<MyState>()((...a) => ({
  ...createCommonSlice(...a),
  ...createUserSlice(...a),
}))
