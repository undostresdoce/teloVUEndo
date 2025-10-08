import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    login(userData) {
      this.user = userData
    },
    logout() {
      this.user = null
    }
  }
})
