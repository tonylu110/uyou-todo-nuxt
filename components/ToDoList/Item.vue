<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  id: number
}>(), {
  title: 'title'
})

const emit = defineEmits<{
  setOk: [id: number, ok: boolean]
}>()

const model = defineModel<boolean>()

const todo = useToDoStore()

const toast = useToast()
function copy() {
  navigator.clipboard.writeText(props.title)
  toast.add({ 
    title: 'Copy Success',
    icon: 'i-heroicons-check-badge',
    color: 'green',
    description: props.title,
    timeout: 800
  })
}

const isMobile = ref(false)
onMounted(() => {
  if (window.innerWidth < 750) {
    isMobile.value = true
  }
})
</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group overflow-hidden flex items-center rounded-lg mb-3 p-3">
    <div class="flex justify-between w-full gap-1 items-center">
      <UCheckbox v-model="model" :label="title" @click="emit('setOk', id, model!)">
        <template #label>
          <span :class="model ? 'line-through' : ''">{{ title }}</span>
        </template>
      </UCheckbox>
      <div :class="`flex right-2 top-[50%] gap-2 ${isMobile ? '' : 'absolute translate-y-[-50%]'}`">
        <UButton 
          variant="soft" 
          icon="i-ph-copy-bold"  
          :class="`${isMobile ? 'opacity-100' : 'opacity-0'} hover:opacity-100 transition-opacity`"
          @click="copy"
        />
        <UButton 
          color="red" 
          variant="soft" 
          icon="i-ph-trash-bold"  
          :class="`${isMobile ? 'opacity-100' : 'opacity-0'} hover:opacity-100 transition-opacity`"
          @click="todo.del(id)"
        />
      </div>
    </div>
  </div>
</template>