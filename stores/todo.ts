import { defineStore } from 'pinia'

export const useToDoStore = defineStore('todo', () => {
    const todo = reactive([])

    return { 
      todo
    }
  },
  {
    persist: true,
  }
)