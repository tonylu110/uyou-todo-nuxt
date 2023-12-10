<script setup lang="ts">
import { useToDoStore } from '../../stores/todo'

const isOk = ref(true)
const todo = useToDoStore()
</script>

<template>
  <List class="pt-4">
    <ToDoListItem v-model="isOk" title="123"/>
  </List>
</template>