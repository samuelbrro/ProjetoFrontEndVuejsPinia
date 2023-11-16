// Seu arquivo de store (useCounterStore.js)
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 0,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  getters: {
    showCount() {
      return 'O valor do count é: ' + this.count;
    },
  },
});
