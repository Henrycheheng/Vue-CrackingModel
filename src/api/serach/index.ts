import http from '@/service/http'
import type * as T from './serach'

export const loginApi: T.ISerachApi = {
  serach(params: unknown) {
    return http.post('./serach', params)
  },
}
