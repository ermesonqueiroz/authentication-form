<script setup>
  import { useUserStore } from '@/stores/userStore'
  import { PhSpinner } from '@phosphor-icons/vue'
  import { api } from '@/helpers/api'
  import router from '@/router'

  const userStore = useUserStore()

  async function fetchUser() {
    const { data: { data } } = await api.get('/auth/user');
    userStore.setUser(data);
  }

  async function logout() {
    await api.post('/auth/logout')
    localStorage.removeItem('token')

    await router.replace({ name: 'home' })
  }

  fetchUser()
</script>

<template>
  <div
    v-if="!!userStore.user"
    class="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <h1 class="text-2xl text-emerald-600 font-bold">Hello, {{ userStore.user.name }}</h1>
    <button v-on:click="logout" class="underline">Log out</button>
  </div>
  <span v-else class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <PhSpinner :size="32" class="animate-spin" />
  </span>
</template>
