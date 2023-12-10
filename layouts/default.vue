<script setup lang="ts">
const showSiderBar = ref(true)

onMounted(() => {
  if (window.innerWidth < 750) {
    showSiderBar.value = false
  }
})
</script>

<template>
  <div class="flex">
    <SiderBar v-if="showSiderBar"/>
    <div class="p-2 flex-1">
      <slot/>
    </div>
  </div>
</template>