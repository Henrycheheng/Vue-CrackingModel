import { ResType } from '@/service/ResType'

export interface ILoginParams {
  [propname: string | number | symbol]: any
  userName: string
  passWord: string | number
}

export interface ILoginApi {
  login: (params: ILoginParams) => Promise<ResType<T>>
}
