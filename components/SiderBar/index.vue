<script setup lang="ts">
withDefaults(defineProps<{
  bgColor?: string
  height?: string
}>(), {
  bgColor: 'bg-black/10'
})

const links = [{
  label: 'My Account',
  avatar: {
    icon: 'i-ph-user-bold',
    size: 'sm'
  },
  to: '/account'
}, {
  label: 'My Today',
  icon: 'i-ph-sun-bold',
  to: '/others/today'
}, {
  label: 'Starred ToDos',
  icon: 'i-ph-star-bold',
  to: '/others/star'
}, {
  label: 'All ToDos',
  icon: 'i-ph-list-dashes-bold',
  to: '/'
}]
</script>

<template>
  <div 
    :class="`${bgColor} w-[330px] flex justify-between flex-col h-screen p-3 min-w-[330px]`"
    :style="{height}"
  >
    <UVerticalNavigation :links="links"/>
    <UVerticalNavigation :links="[{
      label: 'Settings',
      icon: 'i-ph-gear-fine-bold',
      to: '/settings'
    }]"/>
  </div>
</template>