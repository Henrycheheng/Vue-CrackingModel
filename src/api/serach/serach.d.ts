export interface ISerachParams {
  [propname: string | number | symbol]: any
  userName: string
  passWord: string | number
}

export interface ISerachApi {
  serach: (params: ISerachParams) => Promise<unknown>
}
