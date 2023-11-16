// navigationStore.js
import { defineStore } from 'pinia';

export const useNavigationStoreCadastro = defineStore('navigationCadastro', {
  state: () => ({
    currentRoute: '/',
  }),
  actions: {
    navigateToCadastro(route) {
      this.currentRoute = route;
    },
  },
});
