<script setup lang="ts">
useHead({
  title: 'uyou ToDo',
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon.png' }
  ]
})

const todo = useToDoStore()

onMounted(() => {
  if (localStorage.getItem('todo') === null) {
    todo.setToDo([
      {
        id: new Date().getTime(),
        text: "Welcome to use uyou ToDo",
        ok: false
      },
      {
        id: new Date().getTime() + 1,
        text: "Move the mouse to the left of the ToDo item to complete the ToDo",
        ok: false
      },
      {
        id: new Date().getTime() + 2,
        text: "Move the mouse to the right of the ToDo item to delete the ToDo",
        ok: false
      },
      {
        id: new Date().getTime() + 3,
        text: "Move the mouse to the top right corner of the ToDo title bar to copy the ToDo content",
        ok: false
      },
    ])
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
