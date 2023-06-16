import type {
  ConvertTokenOutput,
  MainstreamNumber,
  ResultResponse,
} from '@/models'
import {
  BACKEND_FACEBOOK,
  BACKEND_GOOGLE_OAUTH2,
  CONVERT_TOKEN_GRANT_TYPE,
  TYPE_GOOGLE,
} from '@/utils/constant'

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

  async convertTokenSocial(token: string, type: string) {
    const url = `/auth/convert-token`

    const DJANGO_AUTH_CLIENT_ID = `${process.env.DJANGO_AUTH_CLIENT_ID}`
    const DJANGO_AUTH_CLIENT_SECRET = `${process.env.DJANGO_AUTH_CLIENT_SECRET}`
    const data = {
      grant_type: CONVERT_TOKEN_GRANT_TYPE,
      client_id: DJANGO_AUTH_CLIENT_ID,
      client_secret: DJANGO_AUTH_CLIENT_SECRET,
      backend: type === TYPE_GOOGLE ? BACKEND_GOOGLE_OAUTH2 : BACKEND_FACEBOOK,
      token,
    }

    const res = await axiosClient.post<ConvertTokenOutput>(url, data)
    return res.data
  },
}

export default numerologyApi
