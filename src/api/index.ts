import { loginApi } from './login'
import { messageApi } from './message'

export default {
  ...loginApi,
  ...messageApi,
}
