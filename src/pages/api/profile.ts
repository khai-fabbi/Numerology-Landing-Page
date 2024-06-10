import axiosClient from './axiosClient'
import type { IResponsePackageHistory, IResponseProfile } from './type'

const profileApi = {
  async getProfile() {
    const url = '/api/profile'
    const response = await axiosClient.get<IResponseProfile>(url)
    return response.data
  },
  async getPackageHistory() {
    const url = '/api/package-history'
    const response = await axiosClient.get<IResponsePackageHistory>(url)
    return response.data
  },
}

export default profileApi
