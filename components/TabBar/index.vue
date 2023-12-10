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
</script>

<template>
  <div class="flex flex-col justify-between h-[62px] p-1">
    <div>
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
</template>