import {COUNTER_INCREMENT, COUNTER_DECREMENT} from './types'

export const incCount = () => ({type: COUNTER_INCREMENT});
export const decCount = () => ({type: COUNTER_DECREMENT});

export const incCounter = () => ({type: COUNTER_INCREMENT});
export const decCounter = () => ({type: COUNTER_DECREMENT})