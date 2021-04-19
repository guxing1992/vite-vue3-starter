import request from '../utils/request'

export const getUserInfo = (data: any) => {
  return request.get('/users/XPoet', {
    params: data
  })
}
