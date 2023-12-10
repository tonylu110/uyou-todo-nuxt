<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  leftIcon?: string
  leftIconShow?: boolean
  rightIconShow?: boolean
}>(), {
  title: 'title',
  leftIcon: 'i-ph-caret-left-bold',
  leftIconShow: true,
  rightIconShow: false
})

const todo = useToDoStore()

const showSiderBar = ref(false)
const isOpen = ref(false)
const height = ref(0)
onMounted(() => {
  if (window.innerWidth < 750) {
    showSiderBar.value = true
    height.value = window.outerHeight - 70
  }
})
</script>

<template>
  <div class="flex flex-col justify-between h-[62px] p-1">
    <div class="flex gap-2">
      <UButton
        v-if="showSiderBar"
        icon="i-ph-list-bold"
        size="sm"
        color="white"
        square
        variant="solid"
        @click="isOpen = !isOpen"
      />
      <UButton
        v-if="leftIconShow"
        :icon="leftIcon"
        size="sm"
        color="white"
        square
        variant="solid"
      />
    </div>
    <div class="flex items-end justify-between">
      <span :class="`${leftIconShow ? '' : 'text-2xl'}`">{{ title }}</span>
      <UButton
        v-if="rightIconShow"
        icon="i-ph-plus-circle-bold"
        size="sm"
        color="white"
        square
        variant="solid"
        @click="todo.showAddFn"
      />
    </div>
  </div>
  <USlideover v-model="isOpen" prevent-close v-if="showSiderBar">
    <div class="p-4 flex-1">
      <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="mb-3" @click="isOpen = false" />
      <SiderBar bg-color="bg-transparent" :height="`${height}px`"/>
    </div>
  </USlideover>
</template>