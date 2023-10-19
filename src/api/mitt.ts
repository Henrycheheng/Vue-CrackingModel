import type { MittEvents } from '@/types/mitt'
import mitt, { Emitter } from 'mitt'

const mitts: Emitter<MittEvents> = mitt<MittEvents>()

export default mitts
