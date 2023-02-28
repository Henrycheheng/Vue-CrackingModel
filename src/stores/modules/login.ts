/* eslint-disable no-console */
import loginApi from '@/api'
import { defineStore } from 'pinia'

export const loginStore = defineStore({
  id: 'counters',
  state: () => ({
    counter: 0,
    list: [
      {
        bugNum: 1000007,
      },
      {
        bugNum: 1000001,
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.list[0].bugNum++
    },
    incrementCounter() {
      this.counter++
    },
    async getLogin() {
      const { data } = await loginApi.login({
        userName: '1',
        passWord: '1',
      })
      console.log('data :>> ', data)
    },
  },
})
