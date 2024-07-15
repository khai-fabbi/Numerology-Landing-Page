import type { StatusRecharge } from '@/utils/enums'

export interface NumberParam {
  birth_day: string
  sex: 'M' | 'F'
  full_name: string
  birth_time?: string
  phone: string
  job?: string
  r1_1?: string
  r1_2?: string
  r2_1?: string
  r2_2?: string
  r3_1?: string
  r3_2?: string
  r4_1?: string
  r4_2?: string
  r5_1?: string
  r5_2?: string
  l1_1?: string
  l1_2?: string
  l2_1?: string
  l2_2?: string
  l3_1?: string
  l3_2?: string
  l4_1?: string
  l4_2?: string
  l5_1?: string
  l5_2?: string
  eq?: string
  iq?: string
  aq?: string
  cq?: string
  type_iq_1?: string
  type_iq_2?: string
  type_iq_3?: string
  type_iq_4?: string
  type_iq_5?: string
  type_iq_6?: string
  type_iq_7?: string
  type_iq_8?: string
  v?: string
  a?: string
  k?: string
}

export interface IResponseProfile {
  data: ProfileData
}
export interface IResponsePackageHistory {
  data: PackageHistory
}
export interface ProfileData {
  id: number
  email: string
  profile: Profile
}

export interface Profile {
  id: number
  name: string
  birth_day: string | null
  address: string | null
  phone: string | null
  number_download: number
}

export interface NumTop {
  id: number
  title: string
  short_content: string
  image: string
  content: string
}
export interface IResponseNumTop {
  data: NumTop[]
}

export interface IResponsePackageList {
  data: Package[]
}

export interface Package {
  id: number
  name: string
  price: number
  price_sale: number | null
  number_download: number
  content: string
}

export interface IPostPayment {
  package_id: number
  price: number
  transaction_code: string
  account_number: string
  account_holder: string
  bank: string
}

export interface PackageHistory {
  user_payment: UserPayment[]
  user_package: UserPackage
  user_download: UserDownload[]
}

export interface UserDownload {
  id: number
  name: string
  created_at: string
}

export interface UserPayment {
  id: number
  package: PackageItem
  price: number
  status: StatusRecharge
  created_at: string
}

export interface UserPackage {
  package: PackageItem
  number_download: number
}

export interface PackageItem {
  id: number
  name: string
  price: number
  price_sale: any
  number_download: number
  content: string
}
