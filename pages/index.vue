<script setup lang="ts">
const height = ref()
onMounted(() => {
  if (window.innerWidth < 750) {
    height.value = window.outerHeight
  }
})
</script>

<template>
  <div 
    class="flex flex-col h-[calc(100vh-1rem)]"
    :style="{height: height ? `calc(${height}px - 1rem)` : ''}"
  >
    <TabBar 
      title="All ToDos" 
      :right-icon-show="true" 
      left-icon="i-ph-caret-up-down-bold"
    />
    <ToDoList/>
  </div>
</template>