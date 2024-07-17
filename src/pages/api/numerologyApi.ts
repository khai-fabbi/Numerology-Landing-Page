import type {
  ConvertTokenOutput,
  MainstreamNumber,
  News,
  ResultResponse,
} from '@/models'
import {
  BACKEND_FACEBOOK,
  BACKEND_GOOGLE_OAUTH2,
  CONVERT_TOKEN_GRANT_TYPE,
  TYPE_GOOGLE,
} from '@/utils/constant'

import axiosClient from './axiosClient'
import type {
  IParamsLaSo,
  IPostPayment,
  IResponseLaSo,
  IResponseNumTop,
  IResponsePackageList,
  NumberParam,
} from './type'

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
  async getNewsTop() {
    const url = '/api/news-top'
    const response = await axiosClient.get<ResultResponse<News[]>>(url)
    return response.data
  },
  async getDetailNews(id: string) {
    const url = `/api/new/${id}`
    const response = await axiosClient.get<News>(url)
    return response.data
  },

  async getNumberFreePDF(params: NumberParam) {
    const url = '/api/so-hoc-free'
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
  async getNumberFeePDF(params: NumberParam) {
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
  async getPackages() {
    const url = '/api/package'
    const response = await axiosClient.get<IResponsePackageList>(url)
    return response.data
  },
  async createPayment(data: IPostPayment) {
    const url = '/api/payments'
    const res = await axiosClient.post(url, data)
    return res.data
  },
  async getNumTop() {
    const url = '/api/num-top'
    const response = await axiosClient.get<IResponseNumTop>(url)
    return response.data
  },
  async getLaso(params: IParamsLaSo) {
    const url = '/api/la-so'
    const response = await axiosClient.get<IResponseLaSo>(url, {
      params,
    })
    return response.data
  },
}

export default numerologyApi
