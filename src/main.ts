import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import RouterPlugin from './plugins/unplugins-vue-autoRoutes'

import '@/design/index.less'
import { pinia } from './stores'
import i18n from './i18n'
import '@s/reset.less'
import '@s/font.less'
import http from '@/service/http'
import utils from '@/utils'
import mitts from '@/api/mitt'

const app = createApp(App)
app.config.globalProperties.$i18n = i18n
app.config.globalProperties.$http = http
app.config.globalProperties.$utils = utils
app.config.globalProperties.$mitts = mitts

app.use(pinia)
app.use(router)
app.use(RouterPlugin, { router }).use(i18n)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')
