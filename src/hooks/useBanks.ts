import type { Fetcher } from 'swr'
import useSWR from 'swr'

import axiosClient from '@/pages/api/axiosClient'

export interface Bank {
  id: number
  bank: string
  branch: string | null
  account_number: string
  account_holder: string
  code: number
}

interface IResponseBanks {
  data: Bank[]
}

const fetcher: Fetcher<IResponseBanks, string> = (url) =>
  axiosClient
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error)
    })
function useBanks() {
  const { data, error, isLoading } = useSWR(`/api/banks`, fetcher)

  return {
    banks: data,
    isLoading,
    error,
  }
}

export default useBanks
