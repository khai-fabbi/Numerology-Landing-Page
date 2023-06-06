import type { MainstreamNumber, ResultResponse } from '@/models'

import axiosClient from './axiosClient'

export interface MainstreamNumberParams {
  full_name: string
  birth_day: string
  phone: string
}
interface IResponseMainstreamNumber {
  so_chu_dao: MainstreamNumber
}
const numerologyApi = {
  async getMainstreamNumber(params: MainstreamNumberParams) {
    const url = '/api/so-chu-dao'
    const response = await axiosClient.get<
      ResultResponse<IResponseMainstreamNumber>
    >(url, {
      params,
    })
    return response.data
  },
  async getMainstreamPDF(params: MainstreamNumberParams) {
    const url = '/api/so-hoc'
    const config = {
      headers: {
        'Content-Type': 'application/pdf',
      },
    }
    const response = await axiosClient.get(url, {
      params,
      responseType: 'arraybuffer',
      ...config,
    })
    return response.data
  },
  getRating(id: string) {
    const url = `/product/${id}/listRating/`
    return axiosClient.get(url)
  },
}

export default numerologyApi
