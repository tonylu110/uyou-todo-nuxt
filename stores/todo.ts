import { defineStore } from 'pinia'
import type todo from '~/components/ToDoList/todo.type'

interface msg {
  code: number
  msg?: string
}

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

    function getCloudToDo(uid: string, success: (msg: msg) => void, fail: (msg: msg) => void) {
      fetch(`https://api.todo.uyou.org.cn/todoexist?uid=${uid}`).then((res) => {
          return res.json()
        }).then((res) => {
          if (res.code === 200) {
            fetch('https://api.todo.uyou.org.cn/addtodo', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                uid,
                data: JSON.stringify({
                  data: todoList
                }),
              }),
            }).then((res) => {
              return res.json()
            }).then((res) => {
              if (res.code === 200)
                success(res)
              else
                fail(res)
            })
          }
          else {
            fetch('https://api.todo.uyou.org.cn/gettodo', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                uid,
              }),
            }).then((res) => {
              return res.json()
            }).then((res: {_id: string, data: string}) => {
              if (res._id) {
                todoList.value = JSON.parse(res.data).data
                success({ code: 200 })
              }
              else {
                fail({code: 500})
              }
            })
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
      del,
      getCloudToDo
    }
  },
  {
    persist: true,
  }
)