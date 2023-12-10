<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="flex flex-col h-[100vh-0.75rem]">
    <TabBar 
      title="others" 
      :right-icon-show="true" 
      left-icon="i-ph-caret-up-down-bold"
    />
    <List>
      <span>{{ route.params.listName }}</span>
    </List>
  </div>
</template>