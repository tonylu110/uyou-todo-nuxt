<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col h-[calc(100vh-0.75rem)]">
    <TabBar 
      title="All ToDos" 
      :right-icon-show="true" 
      left-icon="i-ph-caret-up-down-bold"
    />
    <ToDoList/>
  </div>
</template>