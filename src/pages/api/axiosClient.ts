import axios from 'axios'
import Cookies from 'js-cookie'
import { signOut } from 'next-auth/react'

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/utils/auth'
import { HttpCode } from '@/utils/enums'

export const BASE_URL = `${process.env.BASE_URL}`
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptors
axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get(ACCESS_TOKEN_KEY)
    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const { status } = error.response
    if (status === HttpCode.UNAUTHORIZED) {
      Cookies.remove(ACCESS_TOKEN_KEY)
      Cookies.remove(REFRESH_TOKEN_KEY)
      signOut()
      // window.location.href = '/'
    }

    return Promise.reject(error)
  }
)

export default axiosClient
