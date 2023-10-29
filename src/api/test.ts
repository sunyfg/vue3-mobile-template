import request from './base'

export const fetchTest = () => {
  return request.get('test')
}
