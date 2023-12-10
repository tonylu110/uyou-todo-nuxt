import { defineStore } from 'pinia'
import type todo from '~/components/ToDoList/todo.type'

export const useToDoStore = defineStore('todo', () => {
    const todoList = ref<todo[] | never[]>([])

    function setToDo(todo: todo[]) {
      todoList.value = todo
    }

    function setOk(id: number, ok: boolean) {
      todoList.value.forEach((item, _index) => {
        if (item.id === id) {
          item.ok = ok
        }
      })
    }

    return { 
      todoList,
      setToDo,
      setOk
    }
  },
  {
    persist: true,
  }
)