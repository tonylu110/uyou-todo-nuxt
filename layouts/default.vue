<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}]
</script>

<template>
  <div class="flex">
    <div class="bg-black/5 flex-1 flex justify-between flex-col h-screen">
      <UVerticalNavigation :links="links"/>
      <UVerticalNavigation :links="[{
        label: 'Settings',
        icon: 'i-ph-gear-fine-bold',
        to: '/settings'
      }]"/>
    </div>
    <div class="w-[80vw]">
      <slot/>
    </div>
  </div>
</template>