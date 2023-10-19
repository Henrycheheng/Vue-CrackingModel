import http from '@/service/http'
import type { ResType } from '@/service/ResType'
import type * as T from './message'

export const messageApi: T.IMessageApi = {
  /**
   *
   *
   * @param { IMessageParams } params
   * @return {*}  {Promise<any>}
   */
  getMessage(params: T.IGetMessageParams): Promise<ResType<T.IMessage>> {
    return http.get('./message', params)
  },
}
