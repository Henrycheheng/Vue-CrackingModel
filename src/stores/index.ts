import { createPinia } from 'pinia'
import piniaPluginPerisit from 'pinia-plugin-persist'

// 全局设置
export const pinia = createPinia()
pinia.use(piniaPluginPerisit)

export default pinia
