import dayjs from 'dayjs'
import type { StateCreator } from 'zustand'

import type { Customer } from '@/models'
import type { Package } from '@/pages/api/type'

import type { MyState } from './useStore'

export interface ICommonSlice {
  customerInfo: Customer
  setCustomerInfo: (value: Customer) => void
  mainNumber: number
  setMainNumber: (value: number) => void

  packageSelected: Package | null
  setPackageSelected: (pk: Package) => void
}
export const createCommonSlice: StateCreator<MyState, [], [], ICommonSlice> = (
  set
) => ({
  customerInfo: {
    name: '',
    phoneNumber: '',
    sex: 'M',
    birthDay: dayjs(),
    job: '',
    timeBirthDay: dayjs(),
  },
  setCustomerInfo: (value) =>
    set((state) => ({ ...state, customerInfo: value })),
  mainNumber: 9,
  setMainNumber: (value: number) =>
    set((state) => ({ ...state, mainNumber: value })),
  packageSelected: null,
  setPackageSelected: (value: Package) =>
    set((state) => ({ ...state, packageSelected: value })),
})
