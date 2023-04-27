import dayjs from 'dayjs'
import type { StateCreator } from 'zustand'

import type { Customer } from '@/models'

import type { MyState } from './useStore'

export interface ICommonSlice {
  customerInfo: Customer
  setCustomerInfo: (value: Customer) => void
  mainNumber: number
  setMainNumber: (value: number) => void
}
export const createCommonSlice: StateCreator<MyState, [], [], ICommonSlice> = (
  set
) => ({
  customerInfo: {
    name: 'hoang thanh trung',
    phoneNumber: '333030030',
    sex: 'M',
    birthDay: dayjs('1994-10-12'),
  },
  setCustomerInfo: (value) =>
    set((state) => ({ ...state, customerInfo: value })),
  mainNumber: 9,
  setMainNumber: (value: number) =>
    set((state) => ({ ...state, mainNumber: value })),
})
