/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'

import { resolve } from 'node:path'
import { createProxy } from './build/vite/proxy'
import { wrapperEnv } from './build/utils'
import { OUTPUT_DIR } from './build/constant'

function pathResolver(dir: string) {
  return resolve(__dirname, '.', dir)
}

export default defineConfig(({ command, mode }) => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PROXY, VITE_LEGACY, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv

  const isBuild = command === 'build' // TODO

  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: () => {
              return false
            },
          },
        },
      }),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: [
          'vue',
          'vue-router',
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true,
          },
        ],
        dts: 'src/auto-import.d.ts',
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      ElementPlus({}),
      visualizer({
        emitFile: false,
        filename: 'stats.html',
        open: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)), // 引用别名,fileURLToPath为了保证转码不会乱码
        '@c': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@t': fileURLToPath(new URL('./src/types', import.meta.url)),
        '@s': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@a': fileURLToPath(new URL('./src/api', import.meta.url)),
      },
      // #region
      // alias: [
      //   {
      //     // /@/xx => src
      //     find: /^\/@\//,
      //     // replacement: pathResolver('src') + '/',
      //   },
      // ],
      // #endregion
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
    },
    server: {
      port: 4000,
      proxy: createProxy(VITE_PROXY),
      hmr: {
        overlay: true,
      },
      host: '0.0.0.0',
    },
    build: {
      outDir: OUTPUT_DIR,
      exclude: [/node_modules/, /src\/vue\/*/],
      chunkSizeWarningLimit: 500,
      reportCompressedSize: true, // 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    },
    css: {
      preprocessorOptions: {
        less: {
          /*
            modifyVars用来less文件后面添加，modifyVars对应的对象属性名会添加到@追加到less文件后面
          */
          modifyVars: {
            // 用于全局的导入，以避免需要单独导入每个样式文件
            hack: `true; @import (reference)"${resolve('src/design//config.less')}"`, // reference 避免重复引用的问题
          },
          javascriptEnabled: true, // less文件支持js的写法
          /*
            会被解析成， @hack: true， @import (reference)"${resolve('src/design//config.less')}"
          */
          additionalData: '@import "./src/styles/global.less";',
        },
      },
    },
  }
})
