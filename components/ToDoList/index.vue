<script setup lang="ts">
const todo = useToDoStore()
</script>

<template>
  <List class="pt-4" v-auto-animate>
    <ToDoListAdd v-if="todo.showAdd" />
    <ToDoListItem 
      v-for="item in todo.todoList" 
      v-model="item.ok"
      :key="item.id"
      :id="item.id" 
      :title="item.text"
      @set-ok="todo.setOk"
    />
  </List>
</template>