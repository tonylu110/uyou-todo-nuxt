import { defineStore } from 'pinia'
import type todo from '~/components/ToDoList/todo.type'

export const useToDoStore = defineStore('todo', () => {
    const todoList = ref<todo[]>([])

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

    const showAdd = ref(false)
    function showAddFn() {
      showAdd.value = !showAdd.value
    }
    function add(text: string) {
      todoList.value.unshift({
        id: new Date().getTime(),
        text,
        ok: false
      })
    }

    function del(id: number) {
      todoList.value.forEach((item, index) =>{
        if (item.id === id) {
          todoList.value.splice(index, 1)
        }
      })
    }

    return { 
      todoList,
      setToDo,
      setOk,
      showAdd,
      showAddFn,
      add,
      del
    }
  },
  {
    persist: true,
  }
)