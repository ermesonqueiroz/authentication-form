<script setup>
import { ref } from "vue"
import { api } from "@/helpers/api";
import router from "@/router";
import {PhInfo} from "@phosphor-icons/vue";
import CredentialsPopover from "@/components/CredentialsPopover.vue";

const email = ref("")
const password = ref("")

async function handleSubmit(e) {
    e.preventDefault()

    const { data } = await api.get("/login");
    const credentialsAreCorrect = data.email === email.value && data.password === password.value;

    if (credentialsAreCorrect) {
        console.log('opa')
        await router.push({ path: "/dashboard" });
    }
}
</script>

<template>
    <form
      class="flex flex-col max-w-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full gap-1"
      v-on:submit="handleSubmit"
    >
      <label for="email" class="uppercase font-bold">Email</label>
      <input type="email" placeholder="user@example.com" class="bg-zinc-800 py-2 px-4 rounded-md" v-model="email" />
      <label for="password" class="mt-2 uppercase font-bold">Password</label>
      <input type="password" placeholder="••••••••" class="bg-zinc-800 py-2 px-4 rounded-md" v-model="password" />
      <input type="submit" value="Sign In" class="bg-emerald-600 py-2 px-4 rounded-md mt-3 font-bold"/>
    </form>

    <CredentialsPopover />
</template>
