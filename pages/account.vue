<script setup lang="ts">
const height = ref()
onMounted(() => {
  if (window.innerWidth < 750) {
    height.value = window.outerHeight
  }
})

const isOpen = ref(false)
const dialogMsg = ref('')
const showCancel = ref(false)

const user = useUserStore()

const uname = ref('')
const pass = ref('')

const toast = useToast()

function login() {
  if (uname.value && pass.value) {
    user.login(uname.value, pass.value, (data) => {
      toast.add({ 
        title: 'Login Success',
        icon: 'i-heroicons-check-badge',
        color: 'green',
        timeout: 800
      })
    }, (data) => {
      if (data.code === 500) {
        dialogMsg.value = 'user name or password fild'
        isOpen.value = true        
      } else if (data.code === 501) {
        dialogMsg.value = 'login error'
        isOpen.value = true
      }
    })
  } else {
    dialogMsg.value = 'plz input user name or password'
    isOpen.value = true
  }
}

function logoutBtn() {
  dialogMsg.value = 'Do you want to log out'
  showCancel.value = true
  isOpen.value = true
}

function logout() {
  user.logout(() => {
    showCancel.value = false
    isOpen.value = false
    toast.add({ 
      title: 'Logout Success',
      icon: 'i-heroicons-check-badge',
      color: 'green',
      timeout: 800
    })
  })
}

function openUrl() {
  window.open('https://register.todo.uyou.org.cn')
}
</script>

<template>
  <div 
    class="flex flex-col h-[calc(100vh-1rem)]"
    :style="{height: height ? `calc(${height}px - 1rem)` : ''}"
  >
    <TabBar 
      title="Account" 
      :left-icon-show="false"
    />
    <List>
      <UContainer>
        <UCard class="mb-3">
          <div class="flex items-center">
            <UAvatar icon="i-ph-user-bold" size="md" class="mr-3"/>
            <span>{{ user.userName ? user.userName : 'Not login in' }}</span>
          </div>
        </UCard>
        <UCard v-if="!user.userId" class="mb-3">
          <div class="flex flex-col gap-3">
            <UInput type="text" placeholder="plz input user name" v-model="uname"/>
            <UInput type="password" placeholder="plz input user password" v-model="pass"/>
          </div>
        </UCard>
        <div v-if="!user.userId" class="mb-3 flex flex-col gap-3">
          <UButton 
            label="log in" 
            size="xl" 
            class="justify-center"
            @click="login"
          />
          <UButton 
            label="log up" 
            size="xl" 
            color="white" 
            class="justify-center"
            @click="openUrl"
          />
        </div>
        <UButton
          v-if="user.userId"
          label="Log out"
          size="xl"
          class="justify-center w-full"
          color="red"
          @click="logoutBtn"
        />
      </UContainer>
    </List>
  </div>
  <Dialog 
    title="Warn"
    v-model="isOpen"
    :show-cancel="showCancel"
    @confirm-fn="() => {
      if (!showCancel) {
        isOpen = false
      } else {
        logout()
      }
    }"
  >
    <span>{{ dialogMsg }}</span>
  </Dialog>
</template>