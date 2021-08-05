import {
  getRequest
} from '../request.js'

export const getAllVersionList = (params) => {
  return getRequest('/version', params)
}