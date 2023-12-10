<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  showCancel?: boolean
  showConfirm?: boolean
}>(), {
  title: 'title',
  showCancel: true,
  showConfirm: true
})

const emit = defineEmits<{
  confirmFn: []
}>()

const isOpen = defineModel<boolean>()
</script>

<template>
  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-center w-full">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="w-full flex justify-center items-center">
        <slot/>
      </div>
      <template #footer>
        <div class="flex gap-3 w-full">
          <UButton 
            v-if="showConfirm"
            label="Confirm" 
            variant="soft" 
            class="flex-1 justify-center"
            @click="emit('confirmFn')"
          />
          <UButton 
            v-if="showCancel"
            label="Cancel" 
            color="red" 
            variant="soft" 
            class="flex-1 justify-center"
            @click="isOpen = false"
          />
        </div>
      </template>
    </UCard>
  </UModal>
</template>