import { defineStore } from 'pinia'

interface msg {
  code: number
  msg?: string
}

export const useUserStore = defineStore('user', () => {
  const userId = ref('')
  const userName = ref('')

  function login(uname: string, pass: string, success: (data: msg) => void, fail: (data: msg) => void) {
    fetch('https://api.todo.uyou.org.cn/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uname: uname,
        passwd: pass,
      }),
    }).then(res => {
      return res.json()
    }).then(res => {
      if (res._id) {
        userId.value = res._id
        userName.value = uname
        success({ code: 200 })
      } else {
        fail(res)
      }
    }).catch(() => {
      fail({ code: 501 })
    })
  }

  function logout(fn: () => void) {
    userId.value = ''
    userName.value = ''
    fn()
  }

  return {
    userId,
    userName,
    login,
    logout
  }
}, {
  persist: true
})