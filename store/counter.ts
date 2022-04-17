import { defineStore } from 'pinia';

export interface CounterState {
  counter: number;
}

export const useCounterStore = defineStore('counterStore', {
  state: (): CounterState => ({
    counter: 0,
  }),
  actions: {
    increment(): void {
      this.counter++;
    },
  },
});
