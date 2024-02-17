import type { Dayjs } from 'dayjs'

export interface Customer {
  name: string
  sex: 'M' | 'F'
  birthDay: Dayjs | null | undefined
  timeBirthDay: Dayjs | null | undefined
  phoneNumber: string
  job: string
}
