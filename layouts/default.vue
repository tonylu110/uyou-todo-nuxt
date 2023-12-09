<script setup lang="ts">
const links = [{
  label: 'My Account',
  avatar: {
    icon: 'i-ph-user-bold',
    size: 'sm'
  }
}, {
  label: 'My Today',
  icon: 'i-ph-sun-bold',
  to: '/others?listName=today'
}, {
  label: 'Starred ToDos',
  icon: 'i-ph-star-bold',
  to: '/others?listName=star'
}, {
  label: 'All ToDos',
  icon: 'i-ph-list-dashes-bold',
  to: '/'
}]
</script>

<template>
  <div class="flex">
    <div class="bg-black/10 w-[330px] flex justify-between flex-col h-screen p-3">
      <UVerticalNavigation :links="links"/>
      <UVerticalNavigation :links="[{
        label: 'Settings',
        icon: 'i-ph-gear-fine-bold',
        to: '/settings'
      }]"/>
    </div>
    <div class="p-3 flex-1">
      <slot/>
    </div>
  </div>
</template>