<script setup lang="ts">
const todo = useToDoStore()

const text = ref('')
function add() {
  todo.add(text.value)
  todo.showAddFn()
}
</script>

<template>
  <div class="mb-3">
    <UTextarea v-model="text" color="primary" variant="outline" placeholder="Add new ToDo..." class="mb-3" />
    <div class="flex gap-3">
      <UButton 
        color="primary" 
        variant="soft" 
        icon="i-ph-check-bold" 
        class="flex-1 justify-center"
        @click="add"
      />
      <UButton 
        color="red" 
        variant="soft" 
        icon="i-ph-x-bold" 
        class="flex-1 justify-center"
        @click="todo.showAddFn"  
      />
    </div>
  </div>
</template>