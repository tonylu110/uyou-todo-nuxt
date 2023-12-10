import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userId = ref('')
  const userName = ref('')

  function login(uname: string, pass: string) {
    
  }

  return {
    userId,
    userName,
    login
  }
}, {
  persist: true
})