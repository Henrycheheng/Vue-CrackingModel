import http from '@/service/http'
import type * as T from './login'

export const loginApi: T.ILoginApi = {
  login(params: T.ILoginParams): Promise<any> {
    return http.post('./login', params)
  },
}
