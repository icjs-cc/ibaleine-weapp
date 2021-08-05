import {
  getRequest
} from '../request.js'

export const getAllNoticeList = (params) => {
  return getRequest('/notice', params)
}