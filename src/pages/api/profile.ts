import axiosClient from './axiosClient'
import type { IResponseProfile } from './type'

const profileApi = {
  async getProfile() {
    const url = '/api/profile'
    const response = await axiosClient.get<IResponseProfile>(url)
    return response.data
  },
}

export default profileApi
