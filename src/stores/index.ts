import { loginStore } from '@/stores/modules/login'

export default function useStore() {
  return {
    counters: loginStore(),
  }
}
