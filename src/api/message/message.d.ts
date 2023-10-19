import { ResType } from '@/service/ResType'

/**
 *
 * IMessageParams is getMessage's parameters
 * @export
 * @interface IMessageParams
 */
export interface IGetMessageParams {
  id: 'string'
}
/**
 *
 * IMessage's response
 * @interface IMessage
 */
interface IMessage {
  [propname: string | number | symbol]: any
  msg: string
}

export interface IMessageApi {
  getMessage: (params: IMessageParams) => Promise<ResType<IMessage>>
}
