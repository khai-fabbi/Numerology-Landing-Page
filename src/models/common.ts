import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export interface CountryType {
  code: string
  label: string
  phone: string
  suggested?: boolean
}
export type SocialLoginType = 'facebook' | 'google' | 'twitter'

export type ResultResponse<D> = {
  status?: string
  error?: boolean
  data: D
  time?: Date
}
export interface MainstreamNumber {
  id: number
  code: number
  title: string
  content: string
  number_page: number
}
export type ConvertTokenOutput = {
  access_token: string
  expires_in: number
  scope: string
  refresh_token: string
  token_type: string
}
export interface News {
  id: number
  title: string
  content: string
  image: string
  created_at: string
  updated_at: string
  category: string | null
}
