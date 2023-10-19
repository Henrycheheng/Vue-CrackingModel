/// <reference types="vite/client" />

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

/* // 添加对 TSX 文件的支持
declare module '*.tsx' {
  import { DefineComponent } from 'vue'
  const Component: DefineComponent<{}, {}, any>
  export default Component
} */

declare const __APP_VERSION__: string
declare module 'unplugin-element-plus/vite'
