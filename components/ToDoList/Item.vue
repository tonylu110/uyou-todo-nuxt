<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  id: number
}>(), {
  title: 'title'
})

const emit = defineEmits<{
  setOk: [id: number, ok: boolean]
}>()

const model = defineModel<boolean>()
</script>

<template>
  <div 
    class="divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group overflow-hidden flex items-center rounded-lg mb-3 p-3"
  >
    <div>
      <UCheckbox v-model="model" :label="title" @click="emit('setOk', id, model!)">
        <template #label>
          <span :class="model ? 'line-through' : ''">{{ title }}</span>
        </template>
      </UCheckbox>
    </div>
  </div>
</template>