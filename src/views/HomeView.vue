<!-- eslint-disable no-console -->
<script setup lang="ts" name="home">
  import { reactive, ref, watch, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import type { Store } from 'pinia'
  import userStore from '../stores/modules/user'
  import useCurrentInstance from '../utils/useCurrentInstance'
  // import type { AllAny } from '../interface/utils'
  const { t } = useI18n()

  console.log(t('welcome'))

  const send = () => {
    // eslint-disable-next-line no-console
    console.log(1)
  }

  // 组件路由
  const route = useRoute()
  const router = useRouter()
  console.log('route:', route, router)

  // 用户状态
  const user: Store = userStore()
  console.log('store:', user)

  // 组件数据
  const msg: Ref = ref('1')
  console.log('data:', msg)

  const info = reactive({
    id: 1,
    name: 'mark',
  })
  console.log('data:', info)

  const sumInfo = reactive({
    num1: 0,
    num2: 0,
    sum: 0,
  })

  console.log('sum:', sumInfo)

  // 组件监听
  watch(
    () => [info.name],
    (val: string[]) => {
      console.log('watch:', val)
    }
  )

  // 组件计算
  const sayHi = computed(() => {
    return `Hi,${info.name}!`
  })

  // 组件当前实例
  const { proxy } = useCurrentInstance()
  console.log('proxy:', proxy)

  // 改变姓名
  function changeName() {
    info.name = 'jack'
  }

  // 到404
  function goNotFound() {
    router.push('/404')
  }

  // 请求接口
  // onMounted(async function getData() {
  //   const data: AllAny = await proxy.$http.get('/')
  //   msg.value = data
  //   console.log('http:', data)
  // })

  // 计算和
  function getSum() {
    const sum: number = proxy.$utils.sum(sumInfo.num1, sumInfo.num2)
    sumInfo.sum = sum
  }

  // 发送消息
  function sendMsg() {
    proxy.$mitts.emit('user', 'mark')
  }
</script>

<template>
  <div>
    <el-button type="success" @click="send">确定</el-button>
  </div>
  <!-- 计算属性 -->
  <p>
    <span>{{ sayHi }}</span>
  </p>
  <p>
    <button type="button" @click="changeName">改变姓名</button>
  </p>
  <!-- 路由 -->
  <p>
    <button type="button" @click="goNotFound">到404</button>
  </p>
  <!-- 全局方法 -->
  <p>
    <input id="num1" v-model="sumInfo.num1" type="number" name="num1" placeholder="数字1" />+
    <input id="num2" v-model="sumInfo.num2" type="number" name="num2" placeholder="数字2" />=
    {{ sumInfo.sum }}
  </p>
  <p>
    <button type="button" @click="getSum">计算和</button>
  </p>
  <!-- 发送消息 -->
  <p>
    <button type="button" @click="sendMsg">发送消息</button>
  </p>
</template>

<style scoped lang="less"></style>
